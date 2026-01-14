#!/usr/bin/env bash
export PATH="/usr/bin:/bin:/mingw64/bin:/usr/sbin:/sbin:$PATH"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

log() {
  printf '%b\n' "${1:-}"
}

if [[ -t 1 ]]; then
  INFO="\033[1;34m[INFO]\033[0m"
  OK="\033[1;32m[OK]\033[0m"
  PASS="\033[1;32m[PASS]\033[0m"
  FAIL="\033[1;31m[FAIL]\033[0m"
  ECONTENT="\033[1;35m[ENDPOINT]\033[0m"
  HCONTENT="\033[1;36m[HEADER]\033[0m"
  BCONTENT="\033[1;36m[BODY]\033[0m"
else
  INFO="[INFO]"
  OK="[OK]"
  PASS="[PASS]"
  FAIL="[FAIL]"
  ECONTENT="[ENDPOINT]"
  HCONTENT="[HEADER]"
  BCONTENT="[BODY]"
fi

info()     { log "$INFO  $*"; }
ok()       { log "$OK    $*"; }
pass()     { log "$PASS  $*"; }
fail()     { log "$FAIL  $*"; }
econtent() { log "$ECONTENT $*"; }
hcontent() { log "$HCONTENT"; }
bcontent() { log "$BCONTENT"; }

json_formatter() {
  awk '
  BEGIN { indent = 0 }
  {
    gsub(/}/, "\n}");
    gsub(/{/, "{\n");
    gsub(/\[/, "[\n");
    gsub(/\]/, "\n]");
    gsub(/,/, ",\n");

    n = split($0, lines, "\n");
    for (i = 1; i <= n; i++) {
      line = lines[i];
      if (line ~ /^[[:space:]]*[}\]]/) indent--;
      for (j = 0; j < indent; j++) printf("  ");
      print line;
      if (line ~ /[{[]$/) indent++;
    }
  }'
}

BASE_URL="http://127.0.0.1:4000"

ENDPOINTS=(
  "GET /api/faq/en"
  "GET /api/faq/nl"
  "GET /api/explorer?lang=en"
  "GET /api/explorer?lang=nl"
  "GET /api/explorer/categories?lang=en"
  "GET /api/explorer/categories?lang=nl"
  "GET /api/carousel"
)

SUMMARY_ENDPOINTS=()
SUMMARY_RESULTS=()
SUMMARY_METHODS=()
SUMMARY_STATUS=()
SUMMARY_TIME=()

info "Testing API endpoints at $BASE_URL"

for entry in "${ENDPOINTS[@]}"; do
  METHOD="${entry%% *}"
  REST="${entry#* }"
  ENDPOINT_PATH="${REST%% *}"
  URL="${BASE_URL}${ENDPOINT_PATH}"

  BODY_FILE=""
  if [[ "$REST" == *"body="* ]]; then
    BODY_FILE="${REST##*body=}"
  fi

  log
  econtent "▶ $METHOD $ENDPOINT_PATH"
  log

  HEADERS="/tmp/headers.$$"
  BODY="/tmp/body.$$"

  CURL_ARGS=(-s -X "$METHOD" -D "$HEADERS" -o "$BODY")

  if [[ -n "$BODY_FILE" ]]; then
    if [[ ! -f "$BODY_FILE" ]]; then
      fail "Body file not found: $BODY_FILE"
      continue
    fi
    CURL_ARGS+=(
      -H "Content-Type: application/json"
      --data-binary "@$BODY_FILE"
    )
  fi

  RESPONSE=$(curl "${CURL_ARGS[@]}" \
    -w "HTTP_STATUS:%{http_code}\nTIME_TOTAL:%{time_total}\n" \
    "$URL")

  STATUS_CODE=$(echo "$RESPONSE" | grep HTTP_STATUS | cut -d':' -f2)
  TIME_TOTAL=$(echo "$RESPONSE" | grep TIME_TOTAL | cut -d':' -f2)

  hcontent
  log "Method: $METHOD"
  [[ -n "$BODY_FILE" ]] && log "Body: $BODY_FILE"
  cat "$HEADERS"

  bcontent
  if grep -qi "application/json" "$HEADERS"; then
    json_formatter < "$BODY"
  else
    cat "$BODY"
  fi

  log
  info "Response Summary:"

  if [[ "$STATUS_CODE" -ge 200 && "$STATUS_CODE" -lt 300 ]]; then
    pass "Status: $STATUS_CODE | Time: ${TIME_TOTAL}s"
    RESULT="PASS"
  else
    fail "Status: $STATUS_CODE | Time: ${TIME_TOTAL}s"
    RESULT="FAIL"
  fi

  SUMMARY_ENDPOINTS+=("$ENDPOINT_PATH")
  SUMMARY_RESULTS+=("$RESULT")
  SUMMARY_METHODS+=("$METHOD")
  SUMMARY_STATUS+=("$STATUS_CODE")
  SUMMARY_TIME+=("$TIME_TOTAL")

  rm -f "$HEADERS" "$BODY"
done

log
info "Summary"
log "--------------------------------------------------------------------------"
printf "%-35s | %-6s | %-6s | %-6s | %s\n" "Endpoint" "Result" "Method" "Status" "Time (s)"
log "--------------------------------------------------------------------------"

for i in "${!SUMMARY_ENDPOINTS[@]}"; do
  RESULT_LABEL="$PASS"
  [[ "${SUMMARY_RESULTS[$i]}" == "FAIL" ]] && RESULT_LABEL="$FAIL"

  printf "%-35s | %-6b | %-6s | %-6s | %.3f\n" \
    "${SUMMARY_ENDPOINTS[$i]}" \
    "$RESULT_LABEL" \
    "${SUMMARY_METHODS[$i]}" \
    "${SUMMARY_STATUS[$i]}" \
    "${SUMMARY_TIME[$i]}"
done

log
ok "API endpoint testing completed."

FROM node:18-alpine

WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy project files
COPY . .

# Expose Vite default port
ENV PORT=5173
EXPOSE 5173

# Ensure Vite listens on all interfaces
ENV HOST=0.0.0.0

CMD ["npm", "run", "dev"]


import "./test.css";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { LensflarePlugin } from "photo-sphere-viewer-lensflare-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";
import React from "react";

function App() {
  const photoSphereRef = React.createRef();

  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    console.log(markersPlugs);
    markersPlugs.addEventListener("select-marker", () => {
      console.log("asd");
    });
  };

  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers
        markers: [
          {
            // image marker that opens the panel when clicked
            id: "image",
            position: { yaw: "95deg", pitch: "16deg" },
            image: "pin-red.png",
            anchor: "bottom center",
            size: { width: 32, height: 32 },
            tooltip: "Monte Civetta, Dolomites, Italy",
          },
        ],
      },
    ],
  ];

  return (
    <div className="App" id={"container-360"}>
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        src="/360photos/image00001.jpeg"
        // defaultZoomLvl={0}
        littlePlanet={false}
        lang={{
          littlePlanetButton: "Little Planet",
        }}
        hideNavbarButton={true}
        height={"100vh"}
        width={"100%"}
        onReady={handleReady}
        plugins={plugins}
      />
    </div>
  );
}

export default App;

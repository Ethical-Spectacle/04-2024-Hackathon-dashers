import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import Stream from "./streaming";
import { useEffect } from "react";

export const VideoCapture = () => {
  console.log("starting Websocket")
    // useEffect(() => {
    //   const ws = new WebSocket("ws://localhost:8000/ws");
    //   ws.onmessage = (event) => {
    //     console.log(event)
    //       const data = JSON.parse(event.data);
    //       console.log("Data received:", data);
          
          

    //   };

    //   return () => {
    //       ws.close();
    //       console.log("Stop")
    //   };
    // }, []);

    return(
        <>
        <img id="main" width="640" height="480" src="http://192.168.210.114:8080/videostream.cgi?loginuse=admin&amp;loginpas="></img>
            {/* <video
                className="w-full h-full rounded-lg"
                autoPlay
                playsInline
                muted
                ref={(video) => {
                    if (video) {
                        navigator.mediaDevices.getUserMedia({ video: true })
                        .then((stream) => {
                            video.srcObject = stream;
                        })
                        .catch((error) => {
                            console.error('Error accessing camera:', error);
                        });
                    }
                }}
            /> */}
            <Button className="rounded-full p-2 m-2" size="icon" variant="outline" onClick={() => console.log("hello")}>
                <CameraIcon className="w-6 h-6" />
                <span className="sr-only">Take Picture</span>
            </Button>
            <Stream/>
        </>
    );
}

import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import Stream from "./streaming";

export const VideoCapture = () => {

    return(
        <>
        <video
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
                    />
                      <Button className="rounded-full p-2 m-2" size="icon" variant="outline" onClick={() => console.log("hello")}>
                        <CameraIcon className="w-6 h-6" />
                        <span className="sr-only">Take Picture</span>
                      </Button>
                      <Stream/>
                      </>
    )
}
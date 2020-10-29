import React,{useState ,useCallback,useRef} from "react";
import Webcam from "react-webcam";

function Webcamcomponent(props) {
    const [ImgSrc, setImgSrc] = useState(null);  // initiallly no image
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const ImageSrc = webcamRef.current.getScreenshot({width: 220, height: 280});// getScreenshot - Returns a base64 encoded string of the current webcam image.
       
        setImgSrc(ImageSrc);
      }, [webcamRef, setImgSrc]);

    return (
        <>
            <Webcam
              audio={false}
              height={620}
              width={400}
              ref={webcamRef}
              screenshotFormat="image/jpeg"/>
            <button onClick={capture}>Capture photo</button>
            {ImgSrc && ( <img src={ImgSrc}
            />
            )}
               
        </>
    );
}

export default Webcamcomponent;
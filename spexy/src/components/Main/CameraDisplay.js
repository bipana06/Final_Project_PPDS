import React, { useState, useRef, useEffect } from 'react';
import { InferenceEngine } from "inferencejs";

// Component to display the camera feed and capture images
function CameraDisplay({ setApiResponse, apiKey }) {
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [capturedImage, setCapturedImage] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // Turn on the camera when the component mounts
    useEffect(() => {
        if (isCameraOn) {
            startCamera();
        }
        return () => {
            stopCamera();
        };
    }, [isCameraOn]);

    // Function to start the camera
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (err) {
            console.error("Error accessing the camera: ", err);
        }
    };

    // Function to stop the camera
    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    // Function to capture the square area in the center of the video feed
    const captureSquare = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const videoWidth = videoRef.current.videoWidth;
        const videoHeight = videoRef.current.videoHeight;
        canvas.width = videoWidth;
        canvas.height = videoHeight;

        // Draw the square area in the center of the video feed
        const squareSize = Math.min(videoWidth, videoHeight) * 0.6;
        const startX = (videoWidth - squareSize) / 2;
        const startY = (videoHeight - squareSize) / 2;

        context.drawImage(
            videoRef.current,
            startX, startY, squareSize, squareSize,
            0, 0, squareSize, squareSize
        );

        const croppedImageData = canvas.toDataURL('image/png');
        setCapturedImage(croppedImageData);
        setIsCameraOn(false);
    };

    // Function to retake the picture
    const retakePicture = () => {
        setCapturedImage(null);
        setIsCameraOn(true);
    };

    // Function to handle the submit button click
    const handleSubmit = async () => {
        console.log("Now sending request to API using inferencejs");
        const inferEngine = new InferenceEngine();
        
        const modelName = "face-shape-detection";
        const version = "1";
        const publishableKey = apiKey; // Use the provided API key

        try {
            const workerId = await inferEngine.startWorker(modelName, version, publishableKey);

            if (capturedImage) {
                try {
                    const blob = await (await fetch(capturedImage)).blob();
                    const imageBitmap = await createImageBitmap(blob);
                    const predictions = await inferEngine.infer(workerId, imageBitmap);
                    console.log(predictions);

                    if (predictions && predictions.length > 0) {
                        setApiResponse(predictions[0].class);
                    } else {
                        setApiResponse("No face shape detected");
                    }
                } catch (error) {
                    console.error("Error during inference:", error);
                    setApiResponse("Error: Unable to detect face shape");
                }
            }
        } catch (error) {
            console.error("Error initializing inference worker:", error);
            setApiResponse("Error initializing inference worker");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Camera Display</h2>

            {capturedImage ? (
                <div style={styles.imageWrapper}>
                    <img src={capturedImage} alt="Captured" style={styles.capturedImage} />
                </div>
            ) : (
                <div style={{ position: 'relative' }}>
                    <video ref={videoRef} autoPlay style={styles.video}></video>
                    <div style={styles.captureSquare}></div> {/* Red square */}
                </div>
            )}

            <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480"></canvas>

            <div style={styles.buttonContainer}>
                {capturedImage ? (
                    <button style={styles.button} onClick={retakePicture}>Retake Picture</button>
                ) : (
                    <button style={styles.button} onClick={captureSquare}>Capture Picture</button>
                )}
                <button style={{ ...styles.button, marginLeft: '10px' }} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default CameraDisplay;

// Local styles for the CameraDisplay component
const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '8px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    capturedImage: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '4px',
        objectFit: 'cover', // Ensures the image scales proportionally and fills its container
    },
    video: {
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
    },
    captureSquare: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50%',
        height: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid red',
        boxSizing: 'border-box',
    },
    buttonContainer: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontFamily: 'Arial, sans-serif',
    }
};



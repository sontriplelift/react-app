import { forwardRef, useRef, useImperativeHandle } from 'react';
import video1 from './videos/video1.mp4';

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))

    return (
        <video src={video1} width="600px" ref={videoRef}></video>
    );
}

export default forwardRef(Video);
import React from "react";
import videoBg from "../../assets/videos/videoBg.mp4"
import './styleVideo.css';

const Video = () => {
    return (
        <div className="main">
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>HOME PLUS</h1>
                <p>Bienvenidos a nuestra tienda online</p>
            </div>
        </div>
    )
}

export default Video;

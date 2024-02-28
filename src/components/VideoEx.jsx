import React from "react";
import vid from "../video/jjk.mp4";
const VideoEx = () => {
  return (
    <div>
      <video width="auto" height="auto" controls>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoEx;

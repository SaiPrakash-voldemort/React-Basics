import React from "react";
import Song from "../audio/song.mp3";
const AudioEx = () => {
  return (
    <div>
      <audio controls>
        <source src={Song} type="audio/ogg" />
      </audio>
    </div>
  );
};

export default AudioEx;

import React from 'react';
import PropTypes from "prop-types";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map( video => {
       return <VideoItem key={video.id.videoID} video={video} onVideoSelect={onVideoSelect} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList

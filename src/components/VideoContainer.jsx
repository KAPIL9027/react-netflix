import React from "react";
import { useGetVideo } from "../hooks/useGetVideo";
import { useSelector } from "react-redux";

const VideoContainer = ({ movieId }) => {
  const videoId = useSelector((state) => state?.movies?.videoKey?.payload);
  useGetVideo(movieId);
  if (!videoId) return;

  return (
    <iframe
      className="relative -top-[8rem] -z-1 w-screen aspect-video"
      src={`https://www.youtube.com/embed/${videoId}?version=3&controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&loop=1&playlist=${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoContainer;

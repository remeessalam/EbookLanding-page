import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import vid1 from "../assets/video/vid1.mp4";
import vid2 from "../assets/video/vid2.mp4";
import vid3 from "../assets/video/vid3.mp4";
import vid4 from "../assets/video/vid4.mp4";
import vid5 from "../assets/video/vid5.mp4";
import vid1Thumb from "../assets/video/vid1.png";
import vid2Thumb from "../assets/video/vid2.png";
import vid3Thumb from "../assets/video/vid3.png";
import vid4Thumb from "../assets/video/vid4.png";
import vid5Thumb from "../assets/video/vid5.png";
import { BiPlay } from "react-icons/bi";
const Videos = ({ setIntroVidIsPlaying }) => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const video5Ref = useRef(null);

  // State to track if videos are playing
  const [isPlaying, setIsPlaying] = useState({
    video1: false,
    video2: false,
    video3: false,
    video4: false,
    video5: false,
  });

  // videos loading state
  const [isVideoLoading, setIsVideoLoading] = useState({
    video1: true,
    video2: true,
    video3: true,
    video4: true,
    video5: true,
  });

  // Function to handle video play
  const handlePlay = (videoRef, videoKey) => {
    setIntroVidIsPlaying(false);
    // Pause all other videos except the one clicked
    if (video1Ref.current && video1Ref.current !== videoRef.current) {
      video1Ref.current.seekTo(0); // Reset to the beginning
      video1Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video1: false }));
    }
    if (video2Ref.current && video2Ref.current !== videoRef.current) {
      video2Ref.current.seekTo(0);
      video2Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video2: false }));
    }
    if (video3Ref.current && video3Ref.current !== videoRef.current) {
      video3Ref.current.seekTo(0);
      video3Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video3: false }));
    }
    if (video4Ref.current && video4Ref.current !== videoRef.current) {
      video4Ref.current.seekTo(0);
      video4Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video4: false }));
    }
    if (video5Ref.current && video5Ref.current !== videoRef.current) {
      video5Ref.current.seekTo(0);
      video5Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video5: false }));
    }

    // Toggle play/pause for the clicked video
    const player = videoRef.current.getInternalPlayer();
    if (player.paused) {
      videoRef.current.seekTo(0);
      player.play();
      setIsPlaying((prev) => ({ ...prev, [videoKey]: true }));
    } else {
      player.pause();
      videoRef.current.seekTo(0); // Reset to the beginning
      setIsPlaying((prev) => ({ ...prev, [videoKey]: false }));
    }
  };

  return (
    <section className="w-full videos">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-5 wrapper">
        <div className="h-[50vh] md:h-[60vh] max-h-[35rem] relative">
          <div
            onClick={() =>
              !isVideoLoading.video1 && handlePlay(video1Ref, "video1")
            }
            className={`absolute top-0 left-0 w-full h-full z-10 ${
              !isPlaying.video1 && "bg-black/20"
            }`}
          >
            {!isPlaying.video1 && !isVideoLoading.video1 && (
              <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BiPlay className="text-[3rem] text-black" />
              </button>
            )}
          </div>

          {isVideoLoading.video1 && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                src={vid1Thumb}
                className="h-full w-full object-cover rounded-[1rem]"
                alt="thumbnail"
              />
            </div>
          )}
          <ReactPlayer
            ref={video1Ref}
            className="h-full w-full z-0"
            url={vid1}
            playing={false}
            width="100%"
            height="100%"
            pip={false}
            playsInline={true}
            onReady={() =>
              setIsVideoLoading((prev) => ({ ...prev, video1: false }))
            }
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                },
              },
            }}
          />
        </div>
        <div className="h-[50vh] md:h-[60vh] max-h-[35rem] relative">
          <div
            onClick={() =>
              !isVideoLoading.video2 && handlePlay(video2Ref, "video2")
            }
            className={`absolute top-0 left-0 w-full h-full z-10 ${
              !isPlaying.video2 && "bg-black/20"
            }`}
          >
            {!isPlaying.video2 && !isVideoLoading.video2 && (
              <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BiPlay className="text-[3rem] text-black" />
              </button>
            )}
          </div>

          {isVideoLoading.video2 && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                src={vid2Thumb}
                className="h-full w-full object-cover rounded-[1rem]"
                alt="thumbnail"
              />
            </div>
          )}
          <ReactPlayer
            ref={video2Ref}
            className="h-full w-full z-0"
            url={vid2}
            playing={false}
            width="100%"
            height="100%"
            pip={false}
            playsInline={true}
            onReady={() =>
              setIsVideoLoading((prev) => ({ ...prev, video2: false }))
            }
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                },
              },
            }}
          />
        </div>
        <div className="h-[50vh] md:h-[60vh] max-h-[35rem] relative">
          <div
            onClick={() =>
              !isVideoLoading.video3 && handlePlay(video3Ref, "video3")
            }
            className={`absolute top-0 left-0 w-full h-full z-10 ${
              !isPlaying.video3 && "bg-black/20"
            }`}
          >
            {!isPlaying.video3 && !isVideoLoading.video3 && (
              <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BiPlay className="text-[3rem] text-black" />
              </button>
            )}
          </div>

          {isVideoLoading.video3 && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                src={vid3Thumb}
                className="h-full w-full object-cover rounded-[1rem]"
                alt="thumbnail"
              />
            </div>
          )}
          <ReactPlayer
            ref={video3Ref}
            className="h-full w-full z-0"
            url={vid3}
            playing={false}
            width="100%"
            height="100%"
            pip={false}
            playsInline={true}
            onReady={() =>
              setIsVideoLoading((prev) => ({ ...prev, video3: false }))
            }
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                },
              },
            }}
          />
        </div>
        <div className="h-[50vh] md:h-[60vh] max-h-[35rem] relative">
          <div
            onClick={() =>
              !isVideoLoading.video4 && handlePlay(video4Ref, "video4")
            }
            className={`absolute top-0 left-0 w-full h-full z-10 ${
              !isPlaying.video4 && "bg-black/20"
            }`}
          >
            {!isPlaying.video4 && !isVideoLoading.video4 && (
              <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BiPlay className="text-[3rem] text-black" />
              </button>
            )}
          </div>
          {isVideoLoading.video4 && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                src={vid4Thumb}
                className="h-full w-full object-cover rounded-[1rem]"
                alt="thumbnail"
              />
            </div>
          )}
          <ReactPlayer
            ref={video4Ref}
            className="h-full w-full z-0"
            url={vid4}
            playing={false}
            width="100%"
            height="100%"
            pip={false}
            playsInline={true}
            onReady={() =>
              setIsVideoLoading((prev) => ({ ...prev, video4: false }))
            }
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                },
              },
            }}
          />
        </div>
      </div>
      <h1 className="whitespace-pre-line text-[2.7rem] mt-14 mb-3 md:mb-8 leading-[3rem] md:leading-[4rem] md:text-[3rem] font-semibold text-primary max-w-[45rem] mx-auto">
        {"Boostmysites\n Founder & Chairman"} <br />
      </h1>
      <h1 className="text-white text-[2.7rem] md:text-6xl mb-3 md:mb-14 font-bold">
        MAHIN B S
      </h1>
      <div className="h-[60vh] aspect-[4/6] mx-auto md:h-[70vh] max-h-[35rem] relative">
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
        {isVideoLoading.video5 && (
          <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70vh] max-h-[35rem] flex justify-center items-center">
            <img
              src={vid5Thumb}
              className="h-full w-full object-cover rounded-[1rem]"
              alt="thumbnail"
            />
          </div>
        )}
        <ReactPlayer
          className="h-full  z-0"
          url={vid5}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          pip={false}
          playsInline={true}
          onReady={() =>
            setIsVideoLoading((prev) => ({ ...prev, video5: false }))
          }
          config={{
            file: {
              attributes: {
                preload: "auto",
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
                playsInline: true,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default Videos;

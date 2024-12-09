import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
// import introVid from "../../../assets/videos/intro.mp4";
// import vidThumb from "../../../assets/videos/intro.png";
import { saveAs } from "file-saver";
import ebook from "../assets/ebook/Building an AI Business Navigating the Roadmaps-.pdf";
// import JoinEntrepreneurs from "../../../JoinEntrepreneurs";
import { BiPlay } from "react-icons/bi";
import EbookForm from "./EbookForm";
import ebookcover from "../assets/images/ebookcover.jpg";
const EbookBanner = ({ introVidIsPlaying, setIntroVidIsPlaying, path }) => {
  const navigate = useNavigate();
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const { pathname } = useLocation();

  const handlePlayVideo = () => {
    setIntroVidIsPlaying(!introVidIsPlaying);
  };
  const downloadEbook = () => {
    saveAs(ebook, "Building an AI Business Navigating the Roadmaps.pdf"); // Path to the file and the desired filename
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleBook = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-full flex-col wrapper relative z-10 flex items-start pt-[10rem] pb-[5rem] lg:pb-0 lg:pt-[5%]">
      <div className="grid lg:grid-cols-2 gap-[2rem] items-start">
        <div className="flex flex-col gap-3 items-start text-center lg:text-start">
          <h1
            data-aos="zoom-in"
            className="text-[2.5rem] text-balance leading-[3rem] md:text-5xl font-semibold text-primary"
          >
            Download E-book and kickstart your entrepreneurial journey today!
          </h1>
          <ul className="tracking-widest text-white list-disc list-inside text-start">
            <li>Exclusive insights to build your dream business</li>
            <li>Proven strategies for success</li>
            <li>And so much more!</li>
          </ul>
          {/* <p className="tracking-widest text-white">
            With our trusted infrastructure and expert team by your side,
            minimizing risks and maximizing growth opportunities
          </p> */}
          <div className="max-w-[25rem] w-full relativerounded-xl">
            <img
              src={ebookcover}
              alt="Book Cover"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
          </div>

          <button
            onClick={downloadEbook}
            className="primary-btn font-medium w-fit hidden lg:flex justify-center py-3 mt-5"
          >
            Download E-Book
          </button>
          <button
            onClick={downloadEbook}
            className="primary-btn font-medium w-[17rem] flex mx-auto lg:hidden justify-center py-3 mt-2"
          >
            Download E-Book
          </button>
        </div>

        <div className="w-full flex justify-center" data-aos="fade-up">
          <div className="intro-vid  w-full relative  px-5 py-6 backdrop-blur-sm rounded-[1rem] bg-white/10">
            <EbookForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookBanner;

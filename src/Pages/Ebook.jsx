import { lazy, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Roadmap from "../../components/landingPage/Roadmap";
import bannerBgVid from "../assets/video/banner-landing.mp4";
import ReactPlayer from "react-player";
import FormSection from "../Components/FormSection";
import { saveAs } from "file-saver";
import ebook from "../assets/ebook/Building an AI Business Navigating the Roadmaps-.pdf";
import ebookcover from "../assets/images/ebookcover.jpg";
import { aiExpertAccesses, subscriptionBenefits } from "../constant";
// import PopupForm from "../../components/landingPage/PopupForm";
const Banner = lazy(() => import("../Components/EbookBanner"));
const FeaturedIn = lazy(() => import("../Components/EbookFeaturedIn"));
const FAQ = lazy(() => import("../Components/EbookFaq"));
const JoinEntrepreneurs = lazy(() =>
  import("../Components/EbookJoinEntrepreneurs")
);
const Reviews = lazy(() => import("../Components/EbookReviews"));
const Videos = lazy(() => import("../Components/EbookVideos"));
const OurOffices = lazy(() => import("../Components/EbookOurOffices"));

const Ebook = ({ path, emailIdToSendMail }) => {
  const [introVidIsPlaying, setIntroVidIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupFormShown");
    if (!popupShown) {
      setShowPopup(true);
    }
  }, []);

  let sourceName;
  if (path === "/ai-expert1") {
    sourceName = "LinkedIn";
  } else if (path === "/ai-expert12") {
    sourceName = "Twitter";
  } else if (path === "/ai-expert13") {
    sourceName = "Meta";
  }

  const downloadEbook = () => {
    saveAs(ebook, "Building an AI Business Navigating the Roadmaps.pdf"); // Path to the file and the desired filename
  };
  return (
    <div className="landing-page relative" id="home">
      {/* {showPopup && (
        <PopupForm
          setShowPopup={setShowPopup}
          emailIdToSendMail={emailIdToSendMail}
          sourceName={sourceName}
        />
      )} */}
      <div className="min-h-screen flex items-center relative">
        <div className="landing-page-bg h-full w-full absolute left-0 top-0">
          <div className="absolute inset-0 h-full w-full bg-black/60 z-[1]"></div>
          <ReactPlayer
            url={bannerBgVid}
            playing
            muted
            playsInline
            loop
            pip={false}
          />
        </div>
        <div className="wrapper h-fit">
          <Banner
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
            path={path}
          />
        </div>
      </div>
      <section className="pt-20">
        <FeaturedIn />
      </section>
      <div className="wrapper">
        <section
          id="features"
          className="flex flex-col items-center justify-center gap-10 text-center section-pt"
        >
          <div className="flex flex-col gap-2 items-center">
            <p
              data-aos="fade-up"
              className="tracking-widest text-lg font-light text-white/80"
            >
              Top-Notch Features
            </p>
            <h2 data-aos="fade-up" className="text-4xl font-bold text-white">
              Access These Exclusive Subscription Benefits
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-7 mt-5 text-white"
          >
            {subscriptionBenefits.map(({ id, title, description, icon }) => {
              const Icon = icon;
              return (
                <div
                  className="p-5 bg-black flex flex-col items-center text-center gap-2 hover:border-t-4 border-primary transition-all duration-150"
                  key={id}
                >
                  <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-white flex items-center justify-center">
                    <Icon className="h-[2rem] w-[2rem] fill-primary1 object-contain" />
                  </div>
                  <h4 className="text-2xl font-semibold leading-tight mt-2">
                    {title}
                  </h4>
                  <p className="font-light text-white/80">{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-pt flex flex-col items-center justify-center text-center gap-10">
          <h1
            data-aos="zoom-in"
            className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center"
          >
            Launch the company <br />
            {"you've always envisioned."}
          </h1>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 w-full justify-center items-center"
          >
            {/* <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to={`${path}/contact`}
            >
              Start your own AI company
            </Link>
            <JoinEntrepreneurs /> */}
          </div>
          <div className="mt-2 text-white" data-aos="fade-up">
            <p className="text-white/80 max-w-[40rem] text-sm">
              We are constantly adding new technology and creation methods that
              we couldn’t previously disclose. Join{" "}
              <span className="text-white font-medium">Boostmysites</span> and
              level up now.
            </p>
          </div>
        </section>

        <FormSection
          emailIdToSendMail={emailIdToSendMail}
          sourceName={sourceName}
        />

        <section
          id="courses"
          data-aos="fade-up"
          className="section-pt text-white"
        >
          <h2 className="text-4xl font-bold text-white text-center">
            Services We Offer
          </h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 max-w-3xl mx-auto">
            {aiExpertAccesses.map((access) => (
              <div
                key={access.title}
                style={{ backgroundImage: `url(${encodeURI(access.img)})` }}
                className="shadow-large shadow-white/10 relative bg-center group overflow-hidden hover:scale-105 bg-cover cursor-pointer transition-all duration-200 rounded-md p-5 text-xl sm:text-2xl flex justify-center items-center text-center w-full aspect-square"
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 h-full w-full"></div>
                <p className="z-10 font-semibold">{access.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center section-pt">
          <h1 className=" text-[2.7rem] mb-14 leading-[3rem] md:text-5xl font-semibold text-primary max-w-[40rem] mx-auto">
            Turn your vision into the company of your dreams.
          </h1>
          <Videos
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
          />
        </section>

        <section data-aos="fade-up" className="section-pt">
          {/* <Roadmap /> */}
          <div className="wrapper w-full flex justify-center">
            <div className="max-w-3xl mx-auto p-6 bg-black text-white flex flex-col items-center">
              <div className="mb-6 bg-black rounded-lg overflow-hidden shadow-lg">
                {/* Book Preview Card */}
                <div className=" w-full relative bg-gray-800">
                  <img
                    src={ebookcover}
                    alt="Book Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Book Info */}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">The Ultimate Guide</h2>
                  <p className="text-gray-300 text-sm mb-4">
                    Discover the secrets of success with this comprehensive
                    guide that will transform your approach to personal and
                    professional growth.
                  </p>

                  {/* Book Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      {/* <BookOpen className="w-4 h-4 mr-1" /> */}
                      <span>12 pages</span>
                    </div>
                    <div>PDF Format</div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadEbook}
                className="primary-btn font-medium w-fit  lg:flex justify-center py-2 sm:py-3 sm:mt-5"
              >
                Download E-Book
              </button>
            </div>

            {/* <button
              onClick={downloadEbook}
              className="primary-btn font-medium w-fit hidden lg:flex justify-center py-3 mt-5"
            >
              Download E-Book
            </button> */}
          </div>
          <h1 className="text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center mt-20">
            Bring your dream company to life.
          </h1>
        </section>

        <section id="reviews" className="pt-[4rem] text-center text-white">
          <div className="max-w-[40rem] mx-auto">
            <h1
              data-aos="zoom-in"
              className="text-4xl font-bold text-white mt-2 text-center"
            >
              Wall Of Love <BsHeartFill className="text-red-500 inline ml-1" />
            </h1>
            <h1
              data-aos="fade-up"
              className="text-xl font-medium mt-[1rem] text-primary"
            >
              <span className="font-bold">Latest Reviews</span> from our
              Customers
            </h1>
          </div>
        </section>
      </div>
      <section>
        <Reviews />
        {/* <div
          data-aos="fade-up"
          className="flex flex-col gap-3 w-full justify-center items-center section-pt"
        >
          <Link
            className="primary-btn font-medium w-[20rem] flex justify-center py-3"
            to={`${path}/contact`}
          >
            Start your own AI company
          </Link>
          <JoinEntrepreneurs />
        </div> */}
        {/* <div className="wrapper">
          <FormSection
            sourceName={sourceName}
            emailIdToSendMail={emailIdToSendMail}
          />
        </div> */}
      </section>
      <div className="wrapper">
        <section data-aos="fade-up" className="">
          <FAQ />
        </section>
        {/* <div className="mt-20">
          <div className="flex flex-col gap-3 w-full justify-center items-center mt-14">
            <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to={`${path}/contact`}
            >
              Start your own AI company
            </Link>
            <JoinEntrepreneurs />
          </div>
        </div> */}

        <section data-aos="fade-up" className="section-pt">
          <OurOffices />
        </section>
      </div>
    </div>
  );
};

export default Ebook;

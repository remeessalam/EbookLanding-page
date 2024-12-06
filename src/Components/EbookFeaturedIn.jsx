import { useKeenSlider } from "keen-slider/react";
import img1 from "../assets/images/featuredin-1.png";
import img2 from "../assets/images/featuredin-2.png";
import img3 from "../assets/images/featuredin-3.png";
import img4 from "../assets/images/featuredin-4.png";
import img5 from "../assets/images/featuredin-5.png";
import img6 from "../assets/images/featuredin-6.png";

const animation = { duration: 10000, easing: (t) => t };

const FeaturedIn = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="text-white flex flex-col gap-5 py-5">
      <h3 className="text-3xl font-medium text-center uppercase">
        Featured In
      </h3>
      <div className="bg-white">
        <div ref={sliderRef} className="keen-slider">
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <img
                src={img}
                alt="featured in"
                className="h-[7rem] w-[12rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;

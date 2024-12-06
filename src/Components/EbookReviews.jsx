import avt1 from "../assets/images/Ellipse 39.png";
import avt2 from "../assets/images/Ellipse 40.png";
import avt3 from "../assets/images/Ellipse 41.png";
import avt4 from "../assets/images/Ellipse 42.png";
import avt5 from "../assets/images/Ellipse 43.png";
import avt6 from "../assets/images/Ellipse 44.png";
import ReactStars from "react-rating-stars-component";
import { InfiniteMovingCards } from "./Ebookinfinite-moving-cards";

const reviews = [
  {
    id: 1,
    name: "Pratik Srivashtav",
    img: avt1,
    desc: "“I recently worked with Boostmysites to start my own AI company, and I couldn’t be happier with the experience. From the very beginning, they provided expert guidance on everything from developing a solid business plan to understanding the technical aspects of AI. Their team was incredibly knowledgeable, patient, and genuinely invested in my success. They offered valuable resources, support, and even connected me with potential clients worldwide. Thanks to Boostmysites, I felt confident and well-prepared to launch my AI business. Highly recommended for anyone looking to enter the AI industry with a strong foundation!”",
  },
  {
    id: 2,
    name: "Ahan R",
    img: avt3,
    desc: "“I started my AI company with zero coding experience, and Boostmysites made it possible. They provided all the tools, resources, and step-by-step guidance I needed to bring my vision to life without any technical background. Their team was incredibly supportive, helping me navigate the process and connect with the right people to build a successful AI business. Thanks to Boostmysites, I now have a thriving company, even without coding skills. Highly recommend them for anyone looking to break into the AI field!”",
  },
  {
    id: 3,
    name: "Manish Yadav",
    img: avt4,
    desc: "“Working with Boostmysites to start my AI company was incredibly affordable. I was amazed at how little investment was needed to get my business off the ground. They provided everything I needed—guidance, resources, and connections—all at a fraction of what I expected. Despite the low cost, the quality of support was top-notch, and I felt fully equipped to launch and grow my AI company. If you’re looking to start in AI with minimal investment, Boostmysites is the way to go!”",
  },
  {
    id: 4,
    name: "Janvi Singh",
    img: avt6,
    desc: "“As a woman entrepreneur starting in AI, Boostmysites was exactly what I needed. They provided all the support and guidance to help me understand the industry and launch my business with confidence. The team was incredibly encouraging, making everything easy to navigate, even without a tech background. With minimal investment, I was able to start my AI company thanks to Boostmysites. I’d recommend them to any woman looking to break into tech!”",
  },
  {
    id: 5,
    name: "Arpit and Navya",
    img: avt5,
    desc: "“My spouse and I decided to start our AI company together, and Boostmysites made the whole process so much easier. They provided clear guidance, valuable resources, and great support at every step. We had minimal tech experience, but their team helped us feel confident and prepared to launch. Starting a business as a married couple can be challenging, but Boostmysites really helped us turn our idea into a reality. Highly recommend for any couple looking to break into AI!”",
  },
  {
    id: 6,
    name: "Hassam Khan",
    img: avt2,
    desc: "Boostmysites made starting my AI company a seamless experience. Their expert guidance, resources, and connections helped me get up and running quickly. They truly care about their clients’ success, and I couldn’t be happier with the support I received. Highly recommend!”",
  },
];

const Reviews = () => {
  return (
    <div data-aos="fade-up" className="mt-14">
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      {/* {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))} */}
    </div>
  );
};

export default Reviews;

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full min-h-[22rem] h-full bg-white/90 rounded-lg p-3 md:p-6 flex flex-col gap-2 items-center">
      <img
        src={review.img}
        className="h-[4rem] w-[4rem] object-cover rounded-full"
        alt={review.name}
      />
      <h4 className="text-lg leading-none font-bold text-black">
        {review.name}
      </h4>
      <ReactStars
        edit={false}
        value={5}
        count={5}
        size={28}
        activeColor="#FFAB23"
      />
      <p className="text-black/70 text-sm whitespace-pre-line leading-normal">
        {review.desc}
      </p>
    </div>
  );
};

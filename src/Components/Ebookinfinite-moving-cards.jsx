import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { cn } from "../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full min-h-[30rem] sm:min-h-[26rem] h-full bg-white/90 rounded-lg p-3 md:p-6 flex flex-col gap-2 items-center"
          >
            <img
              src={item.img}
              className="h-[4rem] w-[4rem] object-cover rounded-full"
              alt={item.name}
            />
            <h4 className="text-lg leading-none font-bold text-black">
              {item.name}
            </h4>
            <ReactStars
              edit={false}
              value={5}
              count={5}
              size={28}
              activeColor="#FFAB23"
            />
            <p className="text-black/70 text-sm whitespace-pre-line leading-normal max-w-[18rem] sm:max-w-[22rem]">
              {item.desc}
            </p>
          </div>
          //   <li
          //     className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
          //     style={{
          //       background:
          //         "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          //     }}
          //     key={item.name}>
          //     <blockquote>
          //       <div
          //         aria-hidden="true"
          //         className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
          //       <span
          //         className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
          //         {item.quote}
          //       </span>
          //       <div className="relative z-20 mt-6 flex flex-row items-center">
          //         <span className="flex flex-col gap-1">
          //           <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
          //             {item.name}
          //           </span>
          //           <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
          //             {item.title}
          //           </span>
          //         </span>
          //       </div>
          //     </blockquote>
          //   </li>
        ))}
      </ul>
    </div>
  );
};

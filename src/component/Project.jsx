import ProjectCard from "./project/ProjectCard";
// Import Swiper React components
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { useMediaQuery } from "react-responsive";
function Project({ project }) {
  const isTablet = useMediaQuery({ query: "(max-width: 912px)" });
  const isMiniTablet = useMediaQuery({ query: "(max-width: 768px)" });

  // swipper config
  const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    modules: [Pagination, Navigation],
  };

  if (isMiniTablet) {
    swiperConfig.pagination = {
      dynamicBullets: true,
    };

    swiperConfig.navigation = false;
  } else {
    swiperConfig.navigation = true;
    swiperConfig.pagination = false;
  }
  return (
    <>
      {isTablet ? (
        <section
          id="project"
          className="mt-[150px] relative lg:mx-[120px]  mx-4"
        >
          <div className="text-center font-semibold mb-6 text-[40px]">
            <h1>Project</h1>
          </div>
          <Swiper {...swiperConfig} className="mySwiper">
            {project.map((proj) => {
              return (
                <SwiperSlide
                  key={proj.id}
                  className="flex justify-center items-center"
                >
                  <ProjectCard
                    images={proj.images}
                    title={proj.title}
                    body={proj.body}
                    skills={proj.skills}
                    linked={proj.linked}
                    github={proj.github}
                    detailBD={proj.detailBD}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      ) : (
        <section id="project" className="mt-[150px]">
          <div className="text-center font-semibold mb-6 text-[40px]">
            <h1>Project</h1>
          </div>
          <div className="flex flex-wrap gap-5 justify-center ">
            {project.map((proj) => {
              return (
                <ProjectCard
                  key={proj.id}
                  images={proj.images}
                  title={proj.title}
                  body={proj.body}
                  skills={proj.skills}
                  linked={proj.linked}
                  github={proj.github}
                  detailBD={proj.detailBD}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default Project;

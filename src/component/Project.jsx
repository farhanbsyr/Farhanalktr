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
  return (
    <>
      {isTablet ? (
        <section id="project" className="mt-[150px] relative">
          <div className="text-center font-semibold mb-6 text-[40px]">
            <h1>Project</h1>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper flex justify-center"
          >
            {project.map((proj) => {
              return (
                <SwiperSlide key={proj.id}>
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

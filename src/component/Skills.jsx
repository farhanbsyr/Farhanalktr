import React from "react";
import SkillSec from "./Skills/SkillSec";
import Sertifikat from "./Skills/Sertifikat";

function Skills() {
  return (
    <section
      id="skills"
      className="mt-[100px] lg:mx-[120px] md:mx-24 sm:mx-20 mx-8"
    >
      <div className="mb-6 text-[40px] font-semibold text-center">
        <h1>Skills & Certificate</h1>
      </div>
      <div className="flex 2xl:flex-row flex-col gap-6">
        <SkillSec />
        <Sertifikat />
      </div>
    </section>
  );
}

export default Skills;

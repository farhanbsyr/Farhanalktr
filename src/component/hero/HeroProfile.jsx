import React from "react";
import profile from "../../assets/Farhan-W.jpeg";

function HeroProfile({}) {
  return (
    <>
      <div className="img-container inline-block shadow-2xl p-1 border-2 rounded-md border-gray-100 bg-white ">
        <img
          src={profile}
          height="500px"
          width="300px"
          alt="Profile Image"
          className="rounded-md object-cover "
        />
      </div>
    </>
  );
}

export default HeroProfile;

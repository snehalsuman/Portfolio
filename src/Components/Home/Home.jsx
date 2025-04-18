import React from "react";
import avatarImg from "../../assets/img.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <TextChange />
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          Pursuing B.Tech (Hons) in Full Stack Software Development and looking forward
          to learning and enhancing my skills as a passionate full stack developer.
          I have a good analytical and problem-solving ability with a keen and enthusiastic
          nature of acquiring knowledge.
        </p>
        <a
  href="https://drive.google.com/file/d/1GrhLzslE_0vzKarOjE0Db7nJrTfTN73T/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
>
  Download CV
</a>
      </div>
      <div>
        <img
          className="w-40 h-40 object-cover rounded-full md:w-100 md:h-100"
          src={avatarImg}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;
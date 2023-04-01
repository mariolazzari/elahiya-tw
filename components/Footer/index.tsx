import React from "react";

const Footer = () => {
  return (
    <div className="h-[50px] bg-gradient-to-tr from-violet-400 to-indigo-400 flex justify-center items-center">
      <a href="https://mariolazzari.it" target="_blank">
        <h6 className="text-xl font-bold text-white hover:animate-bounce">
          © Mario Lazzari {new Date().getFullYear()}
        </h6>
      </a>
    </div>
  );
};

export default Footer;

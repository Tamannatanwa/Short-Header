import { Facebook, LinkedIn, Twitter, Wifi, YouTube } from "@mui/icons-material";
import React from "react";
import "./About.css";
const AboutMe = () => {
  return (
    <>
    <div className="aboutPage">
      <div className="aboutContent">
        <p className="aboutme">ABOUT ME</p>
        <p className="textcenter">I AM A PHOTOGRAPHER & DESIGNER</p>
        <p className="textcenter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure
          eaque, molestiae ipsum harum enim ex quod sapiente, dolores ducimus
          fugiat impedit delectus provident placeat. Iste sit similique, veniam
          rerum. Quidem voluptatem provident illo eos, ex facilis.
        </p>
        <div>
          <p>
          Lorem ipsum dolor sit amet
          </p>
          <p>
          Lorem ipsum dolor sit amet
          </p>
          <p>
          Lorem ipsum dolor sit amet
          </p>
          <p>
          Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="iconData">
            <div><Facebook className="icon"/></div>
            <div><Twitter className="icon"/></div>
            <div><LinkedIn className="icon"/></div>
            <div><YouTube className="icon"/></div>
            <div><Wifi className="icon"/></div>
        </div>
      </div>
      <div>
        <img
          src="https://mobirise.com/extensions/portfoliom4/assets/images/01.jpg"
          alt=""
          className="image"
        />
      </div>
    </div>
    </>
  );
};

export default AboutMe;

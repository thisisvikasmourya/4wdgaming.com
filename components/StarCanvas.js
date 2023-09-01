import { useEffect, useRef, useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import Typewriter from "typewriter-effect";

export default function StarsCanvas() {
  const canvasRef = useRef();
  const sliderRef = useRef();

  let screen,
    stars,
    params = { speed: 2, number: 300, extinction: 4 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function Star() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.z = Math.random() * canvas.width;

      this.move = function () {
        this.z -= params.speed;
        if (this.z <= 0) {
          this.z = canvas.width;
        }
      };

      this.show = function () {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (canvas.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (canvas.width / this.z);
        y = y + screen.c[1];
        rad = canvas.width / this.z;
        opacity =
          rad > params.extinction ? 1.5 * (2 - rad / params.extinction) : 1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(77,50,107, " + opacity + ")";
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      };
    }

    function setupStars() {
      screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
      };
      window.cancelAnimationFrame(updateStars);
      canvas.width = screen.w;
      canvas.height = screen.h;
      stars = [];
      for (let i = 0; i < params.number; i++) {
        stars[i] = new Star();
      }
    }

    function updateStars() {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(function (s) {
        s.show();
        s.move();
      });
      window.requestAnimationFrame(updateStars);
    }

    setupStars();
    updateStars();

    sliderRef.current.oninput = function () {
      params.speed = this.value;
    };

    window.onresize = function () {
      setupStars();
    };
  }, []);

  const [text, setText] = useState("");

  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setRandomPhrase(Quotes[randomIndex]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setText(phrases[randomIndex]);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const Quotes = [
    "Gaming PR Services ",
    "Gaming Content Management",
    "Digital Marketing for Gaming",
    "Social Media for Gaming",
    "Gaming Performance Marketing",
    "Growth Marketing for Gaming",
    "Community Building in Gaming",
    "Game Public Relations",
    "Gaming Marketing Solutions",
    "Gaming Content Strategy",
    "Online Gaming Marketing",
    "Social Media Engagement in Gaming",
    "Performance-Driven Gaming Marketing",
    "Building Gaming Communities",
    "Game PR and Marketing",
    "Content Marketing for Gaming",
    "Gaming Social Media Management",
    "Performance Marketing for Gaming",
    "Building Gaming Networks",
    "Esports Community Building",
    "Gaming PR Strategies",
    "Gaming Content Excellence",
    "Game Developer PR",
    "Gaming Outreach Campaigns",
    "Gaming Content Creation Excellence",
    "Social Media Engagement for Gaming",
    "Performance-Enhancing Gaming Marketing",
    "Growth Strategies for Gaming",
    "Community Management in Gaming",
    "Gaming PR and Visibility",
    "Gaming Content Management",
    "Gaming Community Building",
    "Game Developer Marketing Solutions",
    "Social Media Engagement in Gaming",
    "Performance-Driven Gaming Growth",
    "Community Engagement for Gaming",
    "Gaming PR Excellence",
    "Gaming Content Strategy Excellence",
    "Social Media Engagement for Gaming",
    "Performance Marketing for Gaming",
    "Growth Strategies for Gaming",
    "Building Gaming Communities",
    "Game PR and Reputation",
    "Gaming Community Engagement",

    "Web3 Gaming Outreach",
    "Digital Marketing for Web3 Games",
    "Building Web3 Gaming Communities",
    "Web3 Gaming Performance Marketing",
    "Growth Marketing for Web3 Games",
    "Web3 Gaming Content Strategy",
    "Social Media Engagement in Web3 Games",
    "Performance-Driven Web3 Gaming Marketing",
    "Building Web3 Gaming Networks",
    "Web3 Gaming Outreach Campaigns",
    "Web3 Gaming Content Creation",
    "Social Media Engagement for Web3 Games",
    "Performance Marketing for Web3 Games",
    "Growth Strategies for Web3 Games",
    "Web3 Gaming Community Building",
    "Web3 Gaming Content Excellence",
    "Web3 Gaming Outreach Services",
    "Social Media Engagement for Web3 Games",
    "Performance-Enhancing Web3 Gaming Marketing",
    "Web3 Gaming Growth Tactics",
    "Web3 Gaming PR Strategies",
    "Web3 Gaming Content Management",
    "Web3 Gaming Community Engagement",
    "Web3 Gaming Content Strategy Excellence",
    "Web3 Gaming Social Media Engagement",

    "Esports Content Management",
    "Digital Marketing for Esports",
    "Social Media for Esports",
    "Esports Performance Marketing",
    "Growth Marketing in Esports",
    "Community Building in Esports",
    "Esports Public Relations",
    "Esports Marketing Solutions",
    "Esports Content Strategy",
    "Online Esports Marketing",
    "Social Media Engagement in Esports",
    "Performance-Driven Esports Marketing",
    "Building Esports Communities",
    "Esports PR and Marketing",
    "Content Marketing for Esports",
    "Esports Social Media Management",
    "Performance Marketing for Esports",
    "Building Esports Networks",
    "Esports Community Engagement",
    "Esports PR Strategies",
    "Esports Content Excellence",
    "Esports Outreach Campaigns",
    "Esports Content Creation Excellence",
    "Social Media Engagement for Esports",
    "Performance-Enhancing Esports Marketing",
    "Growth Strategies for Esports",
    "Community Management in Esports",
    "Esports PR Excellence",
    "Esports Content Strategy Excellence",
    "Social Media Engagement for Esports",
    "Performance Marketing for Esports",

    "Real Money Gaming Marketing",
    "Digital Marketing for RMG",
    "Social Media for RMG",
    "RMG Performance Marketing",
    "Growth Marketing for RMG",
    "Community Building in RMG",
    "RMG Public Relations",
    "RMG Marketing Solutions",
    "RMG Content Strategy",
    "Online RMG Marketing",
    "Social Media Engagement in RMG",
    "Performance-Driven RMG Marketing",
    "Building RMG Communities",
    "RMG PR and Marketing",
    "Content Marketing for RMG",
    "RMG Social Media Management",
    "Performance Marketing for RMG",
    "Building RMG Networks",
    "RMG Community Engagement",
    "RMG PR Strategies",
    "RMG Content Excellence",
    "RMG Outreach Campaigns",
    "RMG Content Creation Excellence",
    "Social Media Engagement for RMG",
    "Performance-Enhancing RMG Marketing",
    "Growth Strategies for RMG",
    "Community Management in RMG",
    "RMG PR Excellence",
    "RMG Content Strategy Excellence",
    "Social Media Engagement for RMG",
    "Performance Marketing for RMG",
  ];

  const phrases = ["GAMING PR", "WEB3 GAMING", "    RMG   ", "ESPORTS"];

  return (
    <>
      <canvas ref={canvasRef} id="stars" />
      <div className="center-text ">
        <div className="text-center ">
          <h1 className="lg:text-2xl border max-w-[200px] mx-auto border-[#ac3b61] text-[#ac3b61] md:text-xl text-xl font-bold hover:text-[#48b4e8]  rounded-lg">
            Moram Napu
          </h1>
          {/* <h1 className="lg:text-4xl md:text-3xl text-5xl font-bold hover:text-[#]"></h1> */}
          {/* <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-[#ac3b61] py-4">
            <Typewriter
              options={{
                strings: [
                  // "Public Relations",
                  // "Strategy & Marketing",
                  // "Content & CopyWriting",
                  // "Creators & Influencers",
                  // "Digital Gaming Events",
                  "Gaming PR",
                  "Web3 Gaming PR",
                  "Esports PR Consultancy",
                ],
                autoStart: true,
                loop: true, // Set the loop option to true for infinite repeating
                deleteSpeed: 0, // Adjust the delete speed
              }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h1>
          <h2 className="text-2xl text-[#123c69] py-8 hover:text-[#ac3b61]">
            Your All-Access Pass to Gaming Superstardom!
          </h2> */}
          <h1 className="text-3xl  font-semibold  text- py-6 text-[#ac3b61] 	">
            Making Brands famous
          </h1>
          <span className="lg:text-7xl     text-5xl font-semibold break-normal text- py-6 text-[#ac3b61] ">
            {text}
          </span>

          <h2 className=" text-xl xs:px-4 sm:px-3   break-normal text-[#123c69] py-4	">
            {randomPhrase}
          </h2>
          <button>
            <a className="text-5xl text-[#123c69] animatedd " href="#page2">
              <BsArrowDownCircle />
            </a>
          </button>
        </div>
      </div>
      <div className="slider -z-10">
        <input ref={sliderRef} type="range" min="0" max="10" step="0.1" />
      </div>
      <style jsx>{`
        body,
        html {
          padding: 0;
          margin: 0;
          overscroll-behavior: none;
          overflow: hidden;
        }

        .center-text {
          position: absolute;
          top: 50%;
          // margin-top:15%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: black;
          font-family: sans-serif;
        }

        .slider {
          position: fixed;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 0px;
          color: black;
          font-family: sans-serif;
          text-align: right;
        }

        .slider input {
          width: 100%;
          margin-bottom: 5px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

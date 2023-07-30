import { useEffect, useRef } from "react";
import {BsArrowDownCircle} from "react-icons/bs"

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
        ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
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
      ctx.fillStyle = "#191C20";
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

  return (
    <>
      <canvas ref={canvasRef} id="stars" />
      <div className="center-text px-20">
        <div className="text-center py-32">
          <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold ">
            Creating the <br />{" "}
            <span className="font-normal text-[#c52326] ">future</span> of Web
          </h1>
          <h2 className="text-2xl py-8">
            Helping businesses go online and grow biggerwith high-techweb
            applications.
          </h2>
          <button>
            <a className="text-5xl text-[#fff] animatedd " href="#page2">
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
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          font-family: sans-serif;
        }

        .slider {
          position: fixed;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          color: white;
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

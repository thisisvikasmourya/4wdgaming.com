import Image from "next/image";
import { useState, useEffect } from "react";
import bg from "../../public/images/MORAM.png";
import { ImEnlarge2 } from "react-icons/im";

const Banner = () => {
  const [text, setText] = useState("");

  const [randomPhrase, setRandomPhrase] = useState("");
  const [stars, setStars] = useState([]);
  const generateRandomStar = () => {
    const positionX = Math.random() * 100 + "vw";
    const positionY = Math.random() * 100 + "vh";
    const size = Math.random() * 3 + 1 + "px";

    return {
      positionX,
      positionY,
      size,
    };
  };
  const handleScreenClick = () => {
    const newStar = generateRandomStar();
    setStars((prevStars) => [...prevStars, newStar]);
  };
  useEffect(() => {
    window.addEventListener("click", handleScreenClick);

    return () => {
      window.removeEventListener("click", handleScreenClick);
    };
  }, []);

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
    "RMG Content Strategy Excellence",
    "Social Media Engagement for RMG",
    "Performance Marketing for RMG",
  ];

  const phrases = ["GAMING PR", "WEB3 GAMING", "    RMG   ", "ESPORTS"];

  const features = [
    {
      name: "MORAM NAPU",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section className="bg-[#eee2dc]">
      <div className="max-w-screen-xl bg-[#eee2dc] mx-auto px-4 lg:py-28 py-20 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <div className="flex flex-wrap text-[#123c69]  rounded-lg  items-center justify-center font-extrabold gap-6 xl:justify-start">
            MORAM NAPU
          </div>
          <h1 className="text-4xl text-[#ac3b61] font-extrabold mx-auto py-2 md:text-5xl">
            Making Brands famous & loved in{" "}
            <span className="text-[#123c69]">{text}</span>
          </h1>
          <p className="max-w-xl text-2xl mx-auto xl:mx-0 text-[#123c69]">
            {randomPhrase}
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-[#ac3b61] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <Image src={bg} alt="" />
            {/* <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}
            >
              <ImEnlarge2/>
            </button> */}
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <Image src={bg} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: star.positionX,
            top: star.positionY,
          }}
        />
      ))}
    </section>
  );
};

export default Banner;

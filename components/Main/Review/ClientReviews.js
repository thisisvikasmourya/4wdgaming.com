import React from "react";
import hornbill from "../../../public/images/client/hornbill.png";
import tfg from "../../../public/images/client/tfg.jpg";
import tgi from "../../../public/images/client/TGI.png";
import pontus from "../../../public/images/client/pontus.jpg";
import rajendra from "../../../public/images/client/rajendra.jpg";
import supercircc from "../../../public/images/client/supercricc.jpeg";
import nazara from "../../../public/images/client/nazara.jpg";
import nazaraceo from "../../../public/images/client/nazaraceo.png";
import jay from "../../../public/images/client/jaysaytaa.png";
import ekaterina from "../../../public/images/client/ekaterina.jpg";
import down from "../../../public/images/client/down.png";
import Image from "next/image";

const testimonials = [
  {
    avatar: nazara,
    name: "Nitish Mittersain - MD and Founder",
    title: "Nazara Technologies Ltd.",
    quote:
      "The right communication has been key to Nazara’s continuous success. SD built up Nazara’s PR and communication from ground up. They have helped create the company’s current perception, and hence are instrumental to Nazara’s growth story.",
  },
  {
    avatar: tfg,
    name: "Jaya Chahar - Founder & CEO, JCDC Sports Pvt. Ltd. Deepak Chahar - Co-Founder & Brand Ambassador",
    title: "Trade Fantasy Gaming (TFG)",
    quote:
      "Our objective for the launch was to create awareness for TFG to be seen as a serious business in the business circles as well as the cricketer community. We successfully achieved this and much more awareness with the right messaging through PR. ",
  },

  {
    avatar: down,
    name: "Gregory Gettinger - Founder & CEO",
    title: "VR Motion Learning GmbH & Co KG",
    quote:
      "We had a wonderful overall experience: The team is professional, responsive, on-time and understands the requirements of international markets. We fully recommend this agency",
  },

  {
    avatar: ekaterina,
    name: "Ekaterina Giganova - Head of PR and Events",
    title: "EvenBet Gaming",
    quote:
      "We have received an incomparable online media reach promoting our new gaming offer for Asia with the help of Moram Napu. I appreciate prompt communication at every stage, attention to detail, and an eye for the best publishing opportunities that Sharmilee’s team has demonstrated while working on our project. Thanks to their work, we were able to deliver a clear offer message and improve our image as one of the leading gaming software vendors in India.",
  },
  {
    avatar: supercircc,
    name: "Arvind Sivdas - Co-Founder and CEO",
    title: "Supercric",
    quote:
      "We worked with 4WD & Sharmilee for the launch of a new product, and they handled the entire activity like absolute ‘Task Masters’. They made the launch happen, despite the disparate individuals they needed to work with, including a foreign investor, the company and the product while bearing in mind perspectives of each party respectively. They always stand firm and deliver, come what may. From managing client requirements to getting in alignment within the team,.....",
  },
  //  they always aim to deliver a valuable brand. Working with the 4WD team is an absolute pleasure. They understand the requirement, if required iterate multiple times till the messaging is clear before taking it to the market. We think of 4WD as strategic partners with very sharp execution ability.
  {
    avatar: tgi,
    name: "Abhishek Aggarwal - Co-Founder & CEO",
    title: "Trinity Gaming India",
    quote:
      "As a young agency, we were unfamiliar with PR and the kind of media support we would need for the brand. While it took a little time to navigate the space, we are glad to have managed to gain recognition as key industry players. Moram Napu has provided continuous guidance, coaching and brand direction to our management, enabling Trinity Gaming to emerge as forerunners in the industry through regular features in top media, speakership opportunities, and awards.",
  },
  {
    avatar: nazaraceo,
    name: "Manish Agarwal - CEO",
    title: "Nazara Technologies Ltd.",
    quote:
      "At Nazara Technologies, we wanted to build our communication and brand messaging at a time when gaming as an industry was at a very nascent stage in terms of media buzz and subsequent coverage. However, drawing from Sharmilee Daru's rich experience, precise communication strategies and execution, they navigated the space with absolute finesse and created the exact perception for a gaming brand we wanted. Their work in the gaming PR space is not only pioneering for Nazara, but the industry as a whole.",
  },
  {
    avatar: pontus,
    name: "Pontus Lemberg - Director and Co-Founder",
    title: "Nordanvind Investments Limited",
    quote:
      "The Indian media space was absolutely new to us when we launched our flagship product in the country. Moram Napu's understanding of the space, strategic planning, aggressive outreach and on-point execution helped us navigate the space seamlessly. The trust we put in them resulted in the brand’s successful launch and its surge to an unexpected level, given SD’s good strategic direction.",
  },
  {
    avatar: hornbill,
    name: "Manoj Thakur - Managing Partner",
    title: "Hornbill Capital Advisers LLP",
    quote:
      "I met Sharmilee when we invested in Nazara Technologies in early 2021.found Sharmilee and her team to be very professional and responsive. Theymanaged the entire PR process around the investment extremely efficiently.Not only was the press coverage extensive but also the television coverage on a leading TV channel was impactful. Sharmilee is quite an expert in public relations and handling media effectively. She thinks strategically and helps you position the company or product in the right manner.",
  },
  {
    avatar: rajendra,
    name: "P.R. Rajendran - Co-founder and CEO",
    title: "Next Wave Multimedia Pvt. Ltd.",
    quote:
      "SD’s consistent communication ensured the brand got its due identity as the leading mobile cricket game in the world.",
  },
];
const Testimonials = () => {
  return (
    <section className="relative py-20 bg-[#14161a]" data-aos="zoom-in-up">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-black text-3xl font-semibold sm:text-4xl">
            Hear from our Clients
          </h3>
          <p className="mt-3 text-[20px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul
            className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="zoom-in-up"
          >
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#14161a] rounded-xl border shadow-md"
              >
                <div className="p-4">
                  <svg
                    className="w-9 h-9 text-gray-300"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <figure>
                  <blockquote>
                    <p className="text-black text-lg  px-4 py-1">
                      {item.quote}
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-x-4 p-4 mt-6  bg-[#4d326b] rounded-xl">
                    <Image
                      src={item.avatar}
                      className="w-16 h-16 rounded-full border-2 border-indigo-500"
                      width={100}
                      alt=""
                      height={100}
                    />
                    <div>
                      <span className="block text-black text-[18px] ">
                        {item.name}
                      </span>
                      <span className="block text-black text-xl mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          {/* <button className="text-[#fff] bg-[#4d326b] rounded-lg px-4 py-3 mt-10">
            Readmore Review
          </button> */}
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[350px]"
        style={{
          backgroundColor: "#fff",
        }}
      ></div>
    </section>
  );
};

export default Testimonials;

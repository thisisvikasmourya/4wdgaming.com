import React from 'react'
import Image from "next/image";
import About from "../../../public/images/webs.png";

const ContentandCopywriting = () => {
    return (
      <div>
        <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
          <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
            Content & Copywriting
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-16 lg:px-32 px-4 bg-[#191C20]">
          <div>
            <Image src={About} alt="hello" layout="" />
          </div>

          <p>
            We build interesting content, always. Like in gaming, we prefer to
            create a world for you. No matter what the type of content, we’ll
            write it with some of the best writers in our team. From your
            initial pitch to the final communication to users, let us do it for
            you. We can help you create advertorial, emails and entire websites
            to make your product pop and bring your message to life.
          </p>
        </div>
      </div>
    );
}

export default ContentandCopywriting

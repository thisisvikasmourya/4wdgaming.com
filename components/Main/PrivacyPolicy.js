import React from 'react'

const PrivacyPolicy = () =>
{
    
    const data = [
      {
        title: "Information You Provide to Us",
        desc: "We collect information that you provide directly to us, by filling up the contact form, or when you subscribe to a newsletter, provide feedback about our Services or contact us with questions or comments about a Service.",
      },
      {
        title: "What we do with the information we gather?",
        desc: "We require this information to understand your needs and provide you with an appropriate service, and for the following reasons: Internal record keeping. We may use the information to improve our products and services.",
      },
      {
        title: "How we use cookies?",
        desc:
          "Cookies are small text files saved to your computer used to track user navigation around a website. They are not cross-referenced with any other information such that an individual person could be identified. We collect only technical information using cookies and other tracking mechanisms to help us operate and provide our Services to you.",
      },
      {
        title: "Children Safety",
        desc: "Our Services are directed to working professionals and brands. Our Services are not intended for children under 16 years of age or the relevant age of majority, and we do not knowingly collect personal information from children under that age.",
      },
      {
        title: "How long will we use your personal data?",
        desc: "We will keep your personal data only for as long as we need to in order to use it. We will not keep more data than we need.",
      },
      {
        title: "Contacting Us",
        desc: "If you have any questions about our website or this Privacy Policy, please contact us.",
      },
    ];
  return (
    <div className="bg-[#eee2dc]">
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4 ">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:px-8" data-aos="zoom-in">
        <div className=" p-4   px-4 pt-10 bg-[#eee2dc]">
          <div>
            <p className="py-1 text-[#123c69] text-[20px]">
              This privacy policy explains our policy regarding the collection,
              protection, use, and sharing of your information that we obtain
              when you use our services, our websites or otherwise interact with
              us. We respect the privacy of our website users and are committed
              to protecting them in all respects. Please read this Privacy
              Policy carefully to understand how we will treat your information
              before you start to use our Websites or communicate with us.
            </p>
            <h1 className="py-1 text-[#123c69] text-[22px]">
              How we collect information from you: -
            </h1>
            {data.map((items, key) => (
              <div key={key}>
                <p className="text-[#ac3b61] font-bold text-xl text-[20px]">
                  {items.title}
                </p>
                <p className=" pb-3 text-[#123c69] text-[18px]">
                  {" "}
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Navigationbar navData={navData} /> */}
    </div>
  );
}

export default PrivacyPolicy

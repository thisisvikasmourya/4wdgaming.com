import { useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-[#ac3b61] font-medium">
        {faqsList.q}
        {state ? (
          <MdKeyboardArrowUp className="text-[30px] text-[#ac3b61]" />
        ) : (
          <MdKeyboardArrowDown className="text-[30px] text-[#ac3b61]" />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-[#123c69]">{faqsList.a}</p>
          <p className="text-[#123c69]">{faqsList.b}</p>
          <p className="text-[#123c69]">{faqsList.c}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqsList = [
    {
      q: "What is a full-service digital marketing agency? ",
      a: "Every brand needs an online presence to succeed. Consider that in India 30 crore people check their Smartphones an average of 70 times a day, they also spend an average of 3 hours a day online. This makes the online space an invaluable medium for attracting customers and building a brand. A full-service digital marketing agency helps brands accomplish both.",
      b: "Digital marketing comprises of activities brands do to promote themselves and drive sales. The best way a brand can do both is by hiring a full-service digital marketing agency to manage every facet of its online presence. A full-service digital marketing agency ensures a brand is ranked well by search engines, manages its social media presence, writes relevant content about the brand, and develops and maintains its website. Such an agency has expertise in a wide range of activities to help promote a brand and drive sales.  ",
    },
    {
      q: "What are the skill sets a full-service digital marketing agency must possess?",
      a: "A full-service digital marketing agency must have expertise in SEO or search engine optimization, social media management, content writing, website design, and maintenance.",
      b: "An exceptional digital marketing agency has a talented team of SEO experts that understands how to use keywords organically to help brands become ranked well by search engines. They also have a team that understands how to create engaging social media content that enhances how a brand is perceived. ",
      c: "Its talented team of content writers are a vast storehouse of knowledge and possess the skill to craft content that is relevant to each client. Finally, its creative team of website designers knows how to create an attractive website that is easy to navigate, informative, and where visitors enjoy spending time. ",
    },
    {
      q: "Why should an organization hire a digital marketing agency instead of doing it in-house?",
      a: "Every business is managed by professionals who excel in one or multiple domains. Their business is successful because they focus on their core competencies. Therefore, by expanding their scope of responsibility by hiring and installing a digital marketing team they do a disservice to their business because they expect to excel in a domain that isn’t their core competency. Every business, if it expects to thrive, must focus all its energy into its core competency and delegate other aspects of its business to those with relevant competencies. ",
      c: "If an enterprise installs an in house digital marketing team while its competitors employ specialised digital marketing agencies, the former will certainly lose customers to competitors.",
    },
    {
      q: "What is native advertising?",
      a: "Native advertising is effective because ads presented using native advertising don’t seem like advertisements at all. This is because native advertising matches the functionality of the platform where it is displayed. Content on online native sites is embedded so seamlessly within sites that native advertisements seem like advertorials. A native advertisement is displayed as an editorial, article, or video which consumers are eager to consume. A skilled digital marketing agency excels at ensuring its client's advertisements appear in reputed and well-read online platforms.",
    },
    {
      q: "What is sponsored content?",
      a: "Sponsored content appears in online publications and is similar to regular editorial content except that it promotes a product or service. Sponsored content is paid for by advertisers. Exceptional digital marketing agencies ensure their client’s content appears in reputed publications that are well read.",
    },
    {
      q: "What is a call to action?",
      a: "A call to action (CTA) is a prompt that instructs the viewer to take a specific action. A call to action is typically written as a command, such as Buy Now. In digital marketing, a CTA generally takes the form of a button or link.",
    },
    {
      q: "How do I know where my Google spend is going and what results I’m getting?",
      a: "It’s simple – advertisers will be billed their ad spend directly from Google. Results will be transparent because we link your Ads account up to Google Analytics and you will receive monthly performance reports.",
    },
    {
      q: "What should be my daily budget for Google Ads?",
      a: "Your budget should match your business goals. Calculate the number of new customers you want, compared them to a baseline conversion rate, and then calculate how many clicks you need each day to reach your goal. The most important factor that decides your budget is potential versus affordability. If your budget is too small, you might not get the kind of traffic you need. On the other hand, if you’re spending more than you can afford, your success won’t be sustainable.",
    },
    {
      q: "Should I use the same keywords for Google Ads if I already rank for them through SEO?",
      a: "It really depends on how much you want to dominate in both. Statistics support having a dominant position for both will increase your overall CTR for both listings.",
    },
    // {
    //   q: "What is sponsored content?",
    //   a: "Sponsored content appears in online publications and is similar to regular editorial content except that it promotes a product or service. Sponsored content is paid for by advertisers. Exceptional digital marketing agencies ensure their client’s content appears in reputed publications that are well read.",
    // },
    // {
    //   q: "What is sponsored content?",
    //   a: "Sponsored content appears in online publications and is similar to regular editorial content except that it promotes a product or service. Sponsored content is paid for by advertisers. Exceptional digital marketing agencies ensure their client’s content appears in reputed publications that are well read.",
    // },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-[#ac3b61] font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
export default FAQ;

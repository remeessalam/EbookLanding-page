import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const faqs = [
  {
    question: "What services do you offer to help build an AI company?",
    answer:
      "We provide end-to-end services, including AI strategy consultation, product development, business model creation, and market entry support. We guide you from ideation to product launch.",
  },
  {
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea's feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    question: "What types of AI solutions can you help develop?",
    answer:
      "We help build various AI solutions, including chatbots, recommendation systems, computer vision applications, and more. We tailor each project to your unique needs.",
  },
  {
    question: "What kind of data is required to build an AI solution?",
    answer:
      "AI solutions require high-quality data, depending on the project. We assist in collecting, preprocessing, and using relevant data for training the model.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
];

const faqsReshab = [
  {
    question:
      "What does the Boostmysites Consultancy cum Subscription model include? ",
    answer:
      "This subscription provides mentorship from Mahin B S, access to 23 specialized AI and IT services, a network of over 170 professionals, business registration support, website development, client acquisition strategies, and assistance with securing high-value deals.",
  },
  {
    question: "Who is this subscription model ideal for?",
    answer:
      "This model is perfect for aspiring tech entrepreneurs aiming to start a business in AI and IT.\n It's especially beneficial for those without technical skills, as Boostmysites handles the tech side, offering mentorship, infrastructure, and a ready-to-use service model.",
  },
  {
    question:
      "How is Boostmysites different from traditional training programs?",
    answer:
      "Unlike typical courses, Boostmysites combines learning with real-world application. Rather than just studying concepts, you’ll apply them immediately, setting up your own business with expert guidance and directly working on client acquisition and service delivery.",
  },
  {
    question:
      "Do I need technical or coding skills to succeed with Boostmysites? ",
    answer:
      "No. Boostmysites is designed for entrepreneurs regardless of technical skills. Our team manages all technical tasks, so you can focus on client relationships, business growth, and sales strategy.",
  },
  {
    question: "What kinds of AI and IT services can I offer to clients?",
    answer:
      "Boostmysites provides access to 23 high-demand services, including automation, machine learning, data analysis, and more. These services are customizable to match individual client needs, making it easier to offer personalized solutions.",
  },
  {
    question: "How does Boostmysites support client acquisition and sales?",
    answer:
      "You’ll receive training on client acquisition, global outreach, and sales techniques. Dedicated managers assist with negotiating and closing deals, including high-ticket clients, helping you establish a strong, international client base.",
  },
  {
    question:
      "Will Boostmysites handle my company registration and legalities? ",
    answer:
      "Yes, our subscription includes support for registering your business across all Indian states, covering paperwork, legal aspects, and compliance so you can focus on business-building activities.",
  },
  {
    question:
      "Does Boostmysites provide website development, and are there additional fees? ",
    answer:
      "Yes, Boostmysites includes website development to give your business a professional online presence. However, this subscription does not cover domain and hosting fees and must be purchased separately.",
  },
  {
    question: "What ongoing mentorship and support does Boostmysites offer?",
    answer:
      "Beyond the setup, you can access continuous mentorship, monthly check-ins, and networking opportunities. We help you refine strategies, stay current with industry trends, and access resources to support ongoing growth and client satisfaction.",
  },
  {
    question:
      "What is “Infrastructure as a Service” (IaaS) in the Boostmysites model?",
    answer:
      "At Boostmysites, IaaS means providing the essential operational infrastructure needed to run a business. This includes a Client Manager, Web Developers, Marketing Managers, a team of specialized Developers across 23 services, Market Training, Branding Team, Client Support, and Quotation Generation tools. Together, these resources allow you to focus on growth without needing to build or manage infrastructure independently. ",
  },
  {
    question: "Can Boostmysites help me close high-value deals? ",
    answer:
      "Absolutely. Boostmysites assigns dedicated managers to guide you through the client acquisition process, assist in negotiations, and help close six-figure deals. This personalized support equips you with the strategies and confidence to secure and retain high-value clients. 12. How can I be sure Boostmysites is the right fit for my business goals? If you’re interested in building a tech business centered on AI and IT without needing deep technical expertise, Boostmysites is ideal. We provide a complete operational framework, mentorship, and resources tailored to entrepreneurs, empowering you to scale your business with confidence and reach clients globally.",
  },
];
const FAQ = () => {
  const { pathname } = useLocation();
  const faqsList = pathname === "/ai-expert1" ? faqsReshab : faqs;
  return (
    <div
      id="faq"
      className="mx-auto text-white flex flex-col items-center justify-center"
    >
      <h3 className="text-4xl font-bold text-white capitalize">
        Frequently asked questions
      </h3>
      <div className="mt-10 flex flex-col gap-4 w-full">
        {faqsList.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-4 bg-[#111111] rounded-md px-4 py-6 w-full"
    >
      <div className="flex justify-between gap-5 w-full font-medium text-start">
        {faq.question}{" "}
        {isOpen ? (
          <FaMinus className="text-xl" />
        ) : (
          <FaPlus className="text-xl" />
        )}
      </div>
      {isOpen && (
        <p className="p-[.5rem] text-white/80 text-start">{faq.answer}</p>
      )}
    </button>
  );
};
export default FAQ;

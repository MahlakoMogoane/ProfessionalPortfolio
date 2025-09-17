import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Web Development",
    title: "Women Paying It Foward SA",
    description:
      "The 'Women Paying It Forward' website is a responsive, user-friendly platform I developed using HTML, CSS, and JavaScript. The project focused on boosting the organization's online visibility through SEO optimization and creating a sustainable digital presence by training their team for long-term content management.",
    link: "https://github.com/MahlakoMogoane/Women-Paying-It-Forward-website",
  },
  {
    id: 2,
    image: card2,
    category: "Game Development",
    title: "SAICA Ethics Game (desktop and VR)",
    description:
      "Developed an immersive ethics training game for SAICA, utilizing Unity and C# for both desktop and VR platforms. The project is protected by the University of Johannesburg's IP policy, ensuring innovative and engaging learning experiences.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "AR Engineering",
    title: "NeuroSTEM AR App",
    description:
      "Developed an augmented reality app for NeuroSTEM, enhancing interactive learning experiences through immersive technology. The project is protected under a non-disclosure agreement (NDA) to safeguard proprietary information.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "AR Engineering",
    title: "UJQuest AR App",
    description:
      "The UJQuest App is a gamified, location-based augmented reality (AR) application I developed to help students navigate the University of Johannesburg's campus. Built with Unity, C#, and ASP.NET, the app was designed to provide a seamless and engaging experience. I integrated Firebase authentication for user management and leveraged Unity WebRequest to handle data, showcasing my full-stack development and AR expertise. The project is protected under a non-disclosure agreement (NDA) to ensure confidentiality and safeguard proprietary information. The project is protected by the University of Johannesburg's IP policy, ensuring innovative and engaging learning experiences.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "Full-Stack Web Development",
    title: "LedgerLite",
    description:
      "LedgerLite is a comprehensive web and mobile application designed to streamline operations for a courier company. Developed using a React.js frontend, an ASP.NET Core backend, and a MySQL database, the platform addresses key challenges faced by couriers, managers, and customers.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "Full-Stack Web Development",
    title: "TrackWise",
    description:
      "I developed a prototype for an international defense company to streamline asset tracking and management using NFC and QR code technology. This project was a practical exercise in designing and implementing a system for a high-stakes, security-conscious environment. It demonstrates my ability to create robust, real-world applications that improve operational efficiency through innovative hardware and software integration. This was for assessment purposes only and is protected by the University of Johannesburg's IP policy.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;

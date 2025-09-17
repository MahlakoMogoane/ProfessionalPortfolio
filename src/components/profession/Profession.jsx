import Roles from "./Roles";

const rolesData = [
  {
    "id": 1,
    "title": "Mixed Reality Engineering",
    "description": "As a Mixed Reality Engineer, I design and build immersive augmented and virtual reality experiences. My work with Unity and C# has focused on creating engaging, location-based AR applications, integrating complex backend services like Firebase and ASP.NET APIs to deliver seamless and interactive digital worlds."
  },
  {
    "id": 2,
    "title": "Web Development",
    "description": "I specialize in crafting high-performance, responsive web applications. I blend a clean, user-centric design approach with efficient code using HTML, CSS, and JavaScript to ensure every project is visually compelling, highly functional, and optimized for search engine visibility."
  },
  {
    "id": 3,
    "title": "Software Engineering",
    "description": "My core expertise lies in developing scalable and maintainable software solutions, from conceptual design to deployment. With a strong foundation in languages like C#, Java, and Python, I build robust applications and systems that solve real-world problems with a focus on clean code, architectural integrity, and accessibility."
  }
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing applications and Mixed Reality experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="mailto:mahlakomogoane@outlook.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

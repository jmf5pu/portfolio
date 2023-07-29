import styles from "./styles/SecondTabMainWindow.module.css";
import Experience from "./Experience";

type ExperienceDetails = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

function SecondTabMainWindow() {
  const experiences: ExperienceDetails[] = [
    {
      title: "AKASA - Software Engineer",
      description:
        "Following my graduation from UVA in May 2022, this role kicked off my professional career in software engineering. Through my time at AKASA, I've gained valuable experience in working with backend automation systems. So far, I've had the priviledge to develop 2 custom python products for clients as well as maintain production code for 20+ products serving 9 different", //healthcare providers. Perhaps my biggest acheivement at AKASA thus far has been refactoring one of our flagship products top-down, eliminating duplicate logic within the workflow, which lead to an overall TPU(time per unit) reduction of 75%, which allowed us to work quadruple our previous volume for that client. This position also helped me gain familiarity with a number of common deployment technologies such as Amazon EC2, S3, and EKS as well as GHA for CI/CD.",
      tech: ["Python", "Typescript", "SQL", "K8s"],
      image: "akasa_logo.png",
    },
    {
      title: "University of Virginia - Bachelor of Science, Computer Science",
      description:
        "During my time at the University of Virginia, I pursued a BSCS degree which allowed me to explore of a large breadth of computer science topics from data structures and algorithms to computer networks and web app development. Cybersecurity topics were of particularly keen interest to me, and I ended up following a focal path in that field, where I studying computer", // architechture, threat detection, and ethical hacking. Some of my favorite classes from my undergrad years were Defense Against the Dark Arts (a malware class), Advanced Software Development, and Dracula. Beyond academics, I balanced my lifestyle with a handful of extracurricular activities. My passion for physical activity led me to club running, which provided a friendly community for me to challenge myself and connect with like-minded individuals. Furthermore, following the COVID-19 pandemic, I had the incredible opportunity to begin training Brazilian Jiu-Jitsu which not only enhanced my physical capabilities but also taught me valuable lessons in discipline, patience, and problem solving, all of which complimented my academic pursuits.",
      tech: ["Python", "C/C++", "Java", "Linux"],
      image: "uva_logo.png",
    },
    {
      title: "Albemarle High School - Student",
      description:
        "I obtained my high school diploma from Albemarle High School, where began my engineering education through their Math Engineering and Science Academy (MESA). This experience gave me my first taste of applied math, physics, and computer science which would later grow into my present-day career. Outside of class I participated in varsity cross country and track.",
      tech: ["Python", "MATLAB"],
      image: "albemarle_logo.png",
    },
  ];
  return (
    <div className={styles.flexContainer}>
      {experiences.map((experience) => (
        <Experience experienceDetails={experience} />
      ))}
    </div>
  );
  // TODO: subheaders for work, then school, experiences
  // add images of school and work logos
  // list skills used by headers for each experience
}

export type { ExperienceDetails };
export default SecondTabMainWindow;

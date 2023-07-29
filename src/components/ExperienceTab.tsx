import styles from "./styles/ExperienceTab.module.css";
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
      title: "AKASA - Software Engineer 6/2022 - Present",
      description:
        "Following my graduation from UVA in May 2022, this role kicked off my professional career in software engineering. Through my time at AKASA, I've gained valuable experience in working with backend automation systems. So far, I've had the priviledge to develop 2 custom python products as well as maintain production code for 20+ products serving 9 different healthcare providers. Perhaps my biggest acheivement at AKASA thus far has been refactoring one of our flagship products top-down, eliminating duplicate logic within the workflow, which lead to an overall TPU(time per unit) reduction of 75%.",
      tech: ["Python", "Typescript", "SQL", "K8s"],
      image: "akasa_logo.png",
    },
    {
      title:
        "University of Virginia - Bachelor of Science, Computer Science 2018 - 2022",
      description:
        "During my time at the University of Virginia, I pursued a BSCS degree which allowed me to explore of a wide breadth of computer science topics ranging from data structures and algorithms to computer networks and app development. Cybersecurity topics became a keen interest of mine and I ended up following a focal path in that field, where I studied computer architechture, threat detection, and ethical hacking. Beyond academics, I balanced my lifestyle with several extracurricular activities such as club running and Brazilian Jiu-Jitsu which not only enhanced my physical capabilities but also taught me valuable lessons in discipline, patience, and problem solving, all of which complimented my academic pursuits.",
      tech: ["Python", "C/C++", "Java", "Linux"],
      image: "uva_logo.png",
    },
    {
      title: "Albemarle High School 2014 - 2018",
      description:
        "I obtained my high school diploma from Albemarle High School, where began my engineering education through their Math Engineering and Science Academy (MESA). This experience gave me my first taste of applied math, physics, and computer science which would later grow into my present-day career. Outside of class I participated in varsity cross country and track.",
      tech: ["Python", "MATLAB"],
      image: "albemarle_logo.png",
    },
  ];
  return (
    <div className={styles.flexContainer}>
      {experiences.map((experience, index) => (
        <Experience
          experienceDetails={experience}
          alignLeft={Boolean(index % 2)}
        />
      ))}
    </div>
  );
}

export type { ExperienceDetails };
export default SecondTabMainWindow;

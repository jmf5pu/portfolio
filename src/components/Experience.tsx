import styles from "./styles/Experience.module.css";
import { ExperienceDetails } from "./SecondTabMainWindow";

type ExperienceProps = {
  experienceDetails: ExperienceDetails;
};

function Experience(props: ExperienceProps) {
  return (
    <div className={styles.flexRow}>
      <img
        src={require("../images/" + props.experienceDetails.image)}
        className={styles.image}
      ></img>
      <div className={styles.flexColumn}>
        <div className={styles.title}>{props.experienceDetails.title}</div>
        <div className={styles.description}>
          {props.experienceDetails.description}
        </div>
      </div>
    </div>
  );
}

export default Experience;

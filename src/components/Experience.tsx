import styles from "./styles/Experience.module.css";
import { ExperienceDetails } from "./ExperienceTab";

type ExperienceProps = {
  experienceDetails: ExperienceDetails;
  alignLeft: boolean;
};

function Experience(props: ExperienceProps) {
  var content = null;
  if (props.alignLeft) {
    content = (
      <>
        <div className={styles.flexColumn}>
          <div className={styles.title}>{props.experienceDetails.title}</div>
          <div className={styles.description}>
            {props.experienceDetails.description}
          </div>
        </div>
        <img
          src={require("../images/" + props.experienceDetails.image)}
          className={styles.image}
        ></img>
      </>
    );
  } else {
    content = (
      <>
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
      </>
    );
  }
  return <div className={styles.flexRow}>{content}</div>;
}

export default Experience;

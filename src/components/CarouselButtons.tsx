import styles from "./styles/CarouselButtons.module.css";
import { Project } from "./ProjectsTab";

type CarouselButtonsProps = {
  projects: Project[];
  activeIndex: Number;
  onClick: (arg0: number) => void;
};

function CarouselButtons(props: CarouselButtonsProps) {
  return (
    <div className={styles.flexContainer}>
      {props.projects.map((project, index) => (
        <button className={styles.carouselButton}>
          <span
            key={index}
            className="material-symbols-outlined"
            onClick={() => props.onClick(index)}
          >
            {index === props.activeIndex
              ? "radio_button_checked"
              : "radio_button_unchecked"}
          </span>
        </button>
      ))}
    </div>
  );
}

export default CarouselButtons;

import styles from "./styles/CarouselItem.module.css";
import { Project } from "./ThirdTabMainWindow";
type CarouselItemProps = {
  project: Project;
};

function CarouselItem(props: CarouselItemProps) {
  return (
    <div className={styles.FlexContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.imageContainer}>image</div>
        <div className={styles.descriptionContainer}>
          {props.project.title}
          <br />
          {props.project.description}
          <br />
          {props.project.image}
        </div>
      </div>
    </div>
  );
}
export default CarouselItem;

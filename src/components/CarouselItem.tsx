import styles from "./styles/CarouselItem.module.css";
import { Project } from "./ThirdTabMainWindow";
type CarouselItemProps = {
  project: Project;
};

function CarouselItem(props: CarouselItemProps) {
  return (
    <div className={styles.FlexContainer}>
      <div className={styles.gridContainer}>
        {props.project.title}
        <br />
        {props.project.description}
        <br />
        {props.project.image}
      </div>
    </div>
  );
}
export default CarouselItem;

import styles from "./styles/CarouselItem.module.css";
import { Project } from "./ProjectsTab";
import { useState, useEffect } from "react";
type CarouselItemProps = {
  project: Project;
};

function CarouselItem(props: CarouselItemProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = props.project.images;

  useEffect(() => {
    // Function to change the image source on a time interval
    const changeImage = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change the image every 5 seconds (adjust the time as needed)
    const intervalId = setInterval(changeImage, 5000);

    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [images]);

  const imageSrc = images[imageIndex];

  return (
    <div className={styles.FlexContainer}>
      <div className={styles.gridContainer}>
        {window.innerWidth > 1000 ? (
          <>
            <div className={styles.imageContainer}>
              <img
                src={require("../images/" + imageSrc)}
                className={styles.image}
              />
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.projectTitle}>
                {props.project.title}
                <div className={styles.techList}>
                  {props.project.tech.join(" | ")}
                </div>
              </div>
              <p className={styles.projectDescription}>
                {props.project.description}
              </p>
              <div className={styles.linkParent}>
                {Object.entries(props.project.urls).map(([key, value]) => (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener"
                    className={styles.link}
                  >
                    {key}
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.descriptionContainer}>
              <div className={styles.projectTitle}>
                {props.project.title}
                <div className={styles.techList}>
                  {props.project.tech.join(" | ")}
                </div>
              </div>
              <p className={styles.projectDescription}>
                {props.project.description}
              </p>
              <div className={styles.linkParent}>
                {Object.entries(props.project.urls).map(([key, value]) => (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener"
                    className={styles.link}
                  >
                    {key}
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={require("../images/" + imageSrc)}
                className={styles.image}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default CarouselItem;

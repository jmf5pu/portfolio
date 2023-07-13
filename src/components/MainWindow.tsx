import styles from "./styles/MainWindow.module.css";

interface MainWindowProps {
  activeTab: number;
}

function MainWindow(props: MainWindowProps) {
  if (props.activeTab === 1) {
    return (
      <div className={styles.parentDiv}>
        <h1>tab 1 main window</h1>
      </div>
    );
  } else if (props.activeTab === 2) {
    return (
      <div className={styles.parentDiv}>
        <h1>tab 2 main window</h1>
      </div>
    );
  } else if (props.activeTab === 3) {
    return (
      <div className={styles.parentDiv}>
        <h1>tab 3 main window</h1>
      </div>
    );
  } else {
    console.log("This shouldn't happen :/");
    return null;
  }
}
export default MainWindow;

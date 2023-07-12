import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import MainWindow from "./components/MainWindow";

function App() {
  return (
    <>
      <div className={styles.parentDiv}>
        <NavBar />
        <MainWindow />
      </div>
    </>
  );
}

export default App;

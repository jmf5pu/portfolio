import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import MainWindow from "./components/MainWindow";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={styles.backgroundDiv}>
      <div className={styles.parentDiv}>
        <NavBar
          activeTab={activeTab}
          onClick={(arg0: number) => {
            setActiveTab(arg0);
          }}
        />
        <MainWindow activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;

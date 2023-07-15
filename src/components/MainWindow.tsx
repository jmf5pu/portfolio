import React from "react";
import styles from "./styles/MainWindow.module.css";
import FirstTabMainWindow from "./FirstTabMainWindow";
import SecondTabMainWindow from "./SecondTabMainWindow";
import ThirdTabMainWindow from "./ThirdTabMainWindow";
interface MainWindowProps {
  activeTab: number;
}

function MainWindow(props: MainWindowProps) {
  const mainWindowComponents: { [key: number]: React.ReactNode } = {
    1: <FirstTabMainWindow />,
    2: <SecondTabMainWindow />,
    3: <ThirdTabMainWindow />,
  };
  if ([1, 2, 3].includes(props.activeTab)) {
    return (
      <div className={styles.parentDivOutline}>
        <div
          className={
            props.activeTab === 1
              ? styles.parentDivFirstTabSelected
              : styles.parentDiv
          }
        >
          {mainWindowComponents[props.activeTab]}
        </div>
      </div>
    );
  } else {
    console.log(`activeTab = ${props.activeTab}. This shouldn't happen!`);
    return null;
  }
}
export default MainWindow;

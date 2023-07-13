import styles from "./styles/NavBar.module.css";
import NavBarTab from "./NavBarTab";
import { useState } from "react";

function NavBar() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={styles.parentDiv}>
      <NavBarTab
        activeTab={activeTab}
        onClick={() => {
          setActiveTab(1);
        }}
        tabNum={1}
      />
      <NavBarTab
        activeTab={activeTab}
        onClick={() => {
          setActiveTab(2);
        }}
        tabNum={2}
      />
      <NavBarTab
        activeTab={activeTab}
        onClick={() => {
          setActiveTab(3);
        }}
        tabNum={3}
      />
    </div>
  );
}
export default NavBar;

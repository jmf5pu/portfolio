import styles from "./styles/NavBar.module.css";
import NavBarTab from "./NavBarTab";

interface NavBarProps {
  activeTab: number;
  onClick: (arg0: number) => void;
}

function NavBar(props: NavBarProps) {
  return (
    <div className={styles.parentDiv}>
      <NavBarTab
        activeTab={props.activeTab}
        onClick={() => {
          props.onClick(1);
        }}
        tabNum={1}
      />
      <NavBarTab
        activeTab={props.activeTab}
        onClick={() => {
          props.onClick(2);
        }}
        tabNum={2}
      />
      <NavBarTab
        activeTab={props.activeTab}
        onClick={() => {
          props.onClick(3);
        }}
        tabNum={3}
      />
    </div>
  );
}
export default NavBar;

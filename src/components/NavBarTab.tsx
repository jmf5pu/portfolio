import styles from "./styles/NavBarTab.module.css";

interface NavBarTabProps {
  activeTab: number;
  onClick: () => void;
  tabNum: number;
}

function NavBarTab(props: NavBarTabProps) {
  return (
    <div
      className={
        props.activeTab === props.tabNum
          ? styles.tabSelected
          : styles.tabNotSelected
      }
      onClick={props.onClick}
    >
      <h1>tab {props.tabNum}</h1>
    </div>
  );
}
export default NavBarTab;

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
      <p>tab {props.tabNum}</p>
    </div>
  );
}
export default NavBarTab;

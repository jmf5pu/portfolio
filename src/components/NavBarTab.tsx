import styles from "./styles/NavBarTab.module.css";

interface NavBarTabProps {
  activeTab: number;
  onClick: () => void;
  tabNum: number;
  tabName: string;
}

function NavBarTab(props: NavBarTabProps) {
  var isActive: boolean = props.tabNum === props.activeTab;
  return (
    <div
      className={isActive ? styles.activeTab : styles.inactiveTab}
      onClick={props.onClick}
    >
      <p
        className={
          !isActive ? styles.tabUnderlineAnimation : styles.tabUnderline
        }
      >
        {props.tabName}
      </p>
    </div>
  );
}
export default NavBarTab;

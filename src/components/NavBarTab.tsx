import styles from "./styles/NavBarTab.module.css";

interface NavBarTabProps {
  activeTab: number;
  onClick: () => void;
  tabNum: number;
  tabName: string;
}

function NavBarTab(props: NavBarTabProps) {
  var isActive: boolean = props.tabNum === props.activeTab;
  if (props.tabNum === 1) {
    return (
      <div
        className={isActive ? styles.tabOneSelected : styles.tabOne}
        onClick={props.onClick}
      >
        <p className={!isActive ? styles.tabUnderlineAnimation : ""}>
          {props.tabName}
        </p>
      </div>
    );
  } else if (props.tabNum === 2) {
    return (
      <div
        className={isActive ? styles.tabTwoSelected : styles.tabTwo}
        onClick={props.onClick}
      >
        <p className={!isActive ? styles.tabUnderlineAnimation : ""}>
          {props.tabName}
        </p>
      </div>
    );
  } else if (props.tabNum === 3) {
    return (
      <div
        className={isActive ? styles.tabThreeSelected : styles.tabThree}
        onClick={props.onClick}
      >
        <p className={!isActive ? styles.tabUnderlineAnimation : ""}>
          {props.tabName}
        </p>
      </div>
    );
  } else {
    console.log(`tabNum = ${props.tabNum}. This shouldn't happen!`);
    return null;
  }
}
export default NavBarTab;

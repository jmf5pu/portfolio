import styles from "./styles/NavBarTab.module.css";

type NavBarTabProps = {
  activeTab: number;
  onClick: () => void;
  tabNum: number;
  tabName: string;
};

function NavBarTab(props: NavBarTabProps) {
  var isActive: boolean = props.tabNum === props.activeTab;
  return (
    <div
      className={isActive ? styles.activeTab : styles.inactiveTab}
      onClick={props.onClick}
    >
      <div
        className={
          !isActive ? styles.tabUnderlineAnimation : styles.tabUnderline
        }
      >
        {props.tabName}
      </div>
    </div>
  );
}
export default NavBarTab;

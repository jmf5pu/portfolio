import styles from "./styles/NavBar.module.css";
import NavBarTab from "./NavBarTab";

type NavBarProps = {
  activeTab: number;
  onClick: (arg0: number) => void;
};

function NavBar(props: NavBarProps) {
  return (
    <div className={styles.parentDiv}>
      <NavBarTab
        activeTab={props.activeTab}
        onClick={() => {
          props.onClick(1);
        }}
        tabNum={1}
        tabName="About"
      />
      <NavBarTab
        activeTab={props.activeTab}
        onClick={() => {
          props.onClick(2);
        }}
        tabNum={2}
        tabName="Experience"
      />
      <NavBarTab
        activeTab={props.activeTab}
        onClick={() => {
          props.onClick(3);
        }}
        tabNum={3}
        tabName="Projects"
      />
    </div>
  );
}
export default NavBar;

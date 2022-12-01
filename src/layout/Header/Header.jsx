// Import logo file
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";
// Import class properties
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div className="header__logo">
          <Logo className={classes.logo} alt = "logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;

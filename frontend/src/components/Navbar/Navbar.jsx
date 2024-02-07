import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={`${styles.logo} ${styles.inActiveStyle}`}>
          CoinBounce
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Home
        </NavLink>

        <NavLink
          to="crypto"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Cryptocurrencies
        </NavLink>

        <NavLink
          to="blogs"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Blogs
        </NavLink>

        <NavLink
          to="submit"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Submit a blog
        </NavLink>

        <NavLink
          to="log-in"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          <button className={styles.logInButton}>Log In</button>
        </NavLink>

        <NavLink
          to="sign-up"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          <button className={styles.signUpButton}> Sign Up</button>
        </NavLink>
      </nav>
      <div></div>
    </>
  );
}

export default Navbar;

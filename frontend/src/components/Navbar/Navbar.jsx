import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar(){
  return(
    <>
   <nav className={styles.navbar}>
    <NavLink className={`${styles.logo} ${styles.inActiveStyle}`}
    >CoinBounce</NavLink>

    <NavLink>Home</NavLink>
    
    <NavLink>Crypto currencies</NavLink>
    
    <NavLink>Blogs</NavLink>
    
    <NavLink>Submit a blog</NavLink>
    
    <NavLink>Log In</NavLink>
    
    <NavLink>Sign Up</NavLink>
   </nav>
   <div></div>
    </>
    
  );
}

export default Navbar;
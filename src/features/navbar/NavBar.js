import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useSelector } from "react-redux";
// import { userSelector } from "../User/userSlice";

const NavBar = (props) => {
  const location = useLocation();

  // const { loggedIn } = useSelector(userSelector)

  const handleToggle = () => {
    if (location.pathname === "/") {
    } else {
      props.toggleMenu();
    }
  };

  return (
    <div className={style.navContainer}>
      {/* <div>
                <NavLink
                    to="/"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                    onClick={handleToggle}
                >
                    Home
                </NavLink>
            </div> */}

      <div>
        <NavLink
          to="/music"
          exact
          className={style.navLink}
          activeClassName={style.active}
          onClick={handleToggle}
        >
          Music
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/tour"
          exact
          className={style.navLink}
          activeClassName={style.active}
          onClick={handleToggle}
        >
          Tour
        </NavLink>
      </div>

      <div>
        <a
          href="https://www.nugs.net/eminence-ensemble-concerts-live-downloads-in-mp3-flac-or-online-music-streaming/"
          className={style.navLink}
        >
          Live Recordings
        </a>
      </div>
      {/* <div>

        <a
          href="https://www.eminenceensemblestore.com/"
          className={style.navLink}
        >
          Store
        </a>
      </div> */}

      <div>
        <NavLink
          to="/about"
          exact
          className={style.navLink}
          activeClassName={style.active}
          onClick={handleToggle}
        >
          About
        </NavLink>
      </div>

      {/* <div>
        <NavLink
          to="/contact"
          exact
          className={style.navLink}
          activeClassName={style.active}
          onClick={handleToggle}
        >
          Contact
        </NavLink>
      </div> */}

      {/* {loggedIn ? (
                    <>
                        <NavLink
                            exact
                            to='/dashboard'
                            className={style.navLink}
                            activeClassName={style.active}
                            onClick={handleToggle}
                        >
                        Dashboard
                        </NavLink>
                    </>
                ) : (
                    <>
                    <div>
                        <NavLink
                            exact
                            to='/signup'
                            className={style.navLink}
                            activeClassName={style.active}
                            onClick={handleToggle}
                        
                        >
                        Sign Up
                        </NavLink>
                    </div>

                    <div>
                        <NavLink
                            exact
                            to='/login'
                            className={style.navLink}
                            activeClassName={style.active}
                            onClick={handleToggle}
                        >
                        Log In
                        </NavLink>
                    </div>
                </>
                )} */}
    </div>
  );
};

export default NavBar;

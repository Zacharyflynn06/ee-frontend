import NavBar from "../navbar/NavBar";
import style from "./Home.module.css";
import white from "./white.png";
import newVideo from "./newVideo.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  return (
    <div className={style.homeContainer}>
      <div className={style.videoOverlay}></div>
      <video
        preload="auto"
        playsInline
        autoPlay
        muted="muted"
        loop="loop"
        className={style.video}
      >
        <source src={newVideo} type="video/mp4" />
        <p>your browser doesn't support this video</p>
      </video>
      <div className={style.contentContainer}>
        <img className={style.logo} src={white} alt="logo" />
        <NavBar toggleMenu={props.toggleMenu} />
        <div className={style.linkContainer}>
          <div className={style.instagram}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/eminenceensemble/?hl=en"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
            </a>
          </div>
          <div className={style.facebook}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/EminenceEnsemble"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
            </a>
          </div>
          <div className={style.twitter}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/eminencerock?lang=en"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
            </a>
          </div>
          <div className={style.youtube}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCzGhe6JMn99ZGR9IDNEL4SA"
            >
              <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" />
            </a>
          </div>
          <div className={style.spotify}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/artist/2gxgPqq1J8gV07X2Q1cIzv"
            >
              <FontAwesomeIcon icon={["fab", "spotify"]} size="3x" />
            </a>
          </div>
          <div className={style.apple}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://music.apple.com/us/artist/eminence-ensemble/980075367"
            >
              <FontAwesomeIcon icon={["fab", "apple"]} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

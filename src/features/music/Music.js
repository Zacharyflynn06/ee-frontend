import style from "./Music.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Music = (props) => {
  return (
    <div className={style.musicContainer}>
      <h1>Music</h1>

      <div className={style.linkContainer}>
        {/* <h2 className={style.linkTitle}>"Dont Hold Your Breath" EP Out Now!</h2> */}

        <div className={style.links}>
          <div >
            <a
            className={style.nugs}
              target="_blank"
              rel="noreferrer"
              href="https://www.nugs.net/eminence-ensemble-concerts-live-downloads-in-mp3-flac-or-online-music-streaming/"
            >
              <img
                className={style.nugs}
                src={process.env.PUBLIC_URL + "images/nugs.png"}
                alt="press-shot"
              />
              <div>Nugs</div>
            </a>
          </div>
          <div className={style.bandcamp}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://eminenceensemble.bandcamp.com/"
            >
              <FontAwesomeIcon icon={["fab", "bandcamp"]} size="4x" />
              <br />
              <div>Bandcamp</div>
            </a>
          </div>
          <div className={style.apple}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://music.apple.com/us/artist/eminence-ensemble/980075367"
            >
              <FontAwesomeIcon icon={["fab", "apple"]} size="4x" />
              <br />
              <div>Apple Music</div>
            </a>
          </div>
          <div className={style.spotify}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/artist/2gxgPqq1J8gV07X2Q1cIzv"
            >
              <FontAwesomeIcon icon={["fab", "spotify"]} size="4x" />
              <br />
              <div>Spotify</div>
            </a>
          </div>
          <div className={style.youtube}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCzGhe6JMn99ZGR9IDNEL4SA"
            >
              <FontAwesomeIcon icon={["fab", "youtube"]} size="4x" />
              <br />
              <div>Youtube</div>
            </a>
          </div>
          <div className={style.amazon}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://music.amazon.com/artists/B018WC7HM6/eminence-ensemble?"
            >
              <FontAwesomeIcon icon={["fab", "amazon"]} size="4x" />
              <br />
              <div>Amazon Music</div>
            </a>
          </div>
          <div className={style.deezer}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.deezer.com/en/artist/9422360"
            >
              <FontAwesomeIcon icon={["fab", "deezer"]} size="4x" />
              <div>Deezer</div>
            </a>
          </div>
        </div>
        <div className={style.featureContainer}>
          <h2>New Release!</h2>
          <div>Live From Shakedown Bar</div>
          <img
            className={style.image}
            src={process.env.PUBLIC_URL + "images/emen221216_Album_Art.jpg"}
            alt="press-shot"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;

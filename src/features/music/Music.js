import style from './Music.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Music = (props) => {
    return ( 
        <div className={style.musicContainer}>
            <h1>Music</h1>
     
            <div className={style.linkContainer}>
                <div className={style.apple}>
                    <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/eminence-ensemble/980075367">
                        <FontAwesomeIcon icon={['fab', 'apple']} size="4x" />
                    <br />
                    <span>Apple Music</span> 
                    </a>
                </div>
                <div className={style.spotify}>
                    <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/2gxgPqq1J8gV07X2Q1cIzv">
                        <FontAwesomeIcon icon={['fab', 'spotify']} size="4x" />
                        <br />
                        <span>Spotify</span> 
                    </a>
                        
                </div>
                <div className={style.youtube}>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCzGhe6JMn99ZGR9IDNEL4SA">
                        <FontAwesomeIcon icon={['fab', 'youtube']} size="4x" />
                        <br />
                        <span>Youtube</span> 
                    </a>
                </div>
                <div className={style.amazon}>
                    <a target="_blank" rel="noreferrer" href="https://music.amazon.com/artists/B018WC7HM6/eminence-ensemble?">
                        <FontAwesomeIcon icon={['fab', 'amazon']} size="4x"  />
                        <br />
                        <span>Amazon Music</span> 
                    </a>
                    
                </div>
                <div className={style.deezer}>
                    <a target="_blank" rel="noreferrer" href="https://www.deezer.com/en/artist/9422360">
                        <FontAwesomeIcon icon={['fab', 'deezer']} size="4x" />
                        <br />
                        <span>Deezer</span> 
                    </a>
                </div>
                <div className={style.bandcamp}>
                    <a target="_blank" rel="noreferrer" href="https://eminenceensemble.bandcamp.com/">
                        <FontAwesomeIcon icon={['fab', 'bandcamp']} size="4x" />
                        <br />
                        <span>Bandcamp</span> 
                    </a>
                </div>


            </div>

        </div>
    );
}
 
export default Music;
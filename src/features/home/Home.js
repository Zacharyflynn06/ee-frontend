import NavBar from '../navbar/NavBar';
import style from './Home.module.css'
import white from './white.png'
import video from './video.mp4'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = (props) => {
    return (
        <div className={style.homeContainer}>
            <div className={style.videoOverlay}></div>
            <video className={style.video} autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
                
                <img className={style.logo} src={white} alt="logo" />
                <NavBar toggleMenu={props.toggleMenu}/>
                    <div className={style.linkContainer}>
                        <div className={style.instagram}>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/eminenceensemble/?hl=en">
                                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                            </a>
                        </div>
                        <div className={style.facebook}>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/EminenceEnsemble">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                            </a>
                        </div>
                        <div className={style.twitter}>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/eminencerock?lang=en">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                            </a>
                        </div>
                        <div className={style.youtube}>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCzGhe6JMn99ZGR9IDNEL4SA">
                                <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
                            </a>
                        </div>
                        <div className={style.spotify}>
                            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/2gxgPqq1J8gV07X2Q1cIzv">
                                <FontAwesomeIcon icon={['fab', 'spotify']} size="2x" />
                            </a>
                                
                        </div>
                        <div className={style.apple}>
                            <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/eminence-ensemble/980075367">
                                <FontAwesomeIcon icon={['fab', 'apple']} size="2x" />
                            </a>
                        </div>
                    </div>
        
        </div>
    )
}

export default Home
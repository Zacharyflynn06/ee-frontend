import React from 'react';
import style from './Music.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Music = (props) => {
    return ( 
        <div className={style.musicContainer}>
            <h1>Music</h1>
     
            <div className={style.linkContainer}>
                <div>
                    <FontAwesomeIcon icon={['fab', 'apple']} size="4x" />
                    Apple Music
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'spotify']} size="4x" />
                    Spotify
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'amazon']} size="4x" />
                    Amazon Music
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'deezer']} size="4x" />
                    Deezer
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'bandcamp']} size="4x" />
                    BandCamp
                </div>


            </div>

        </div>
    );
}
 
export default Music;
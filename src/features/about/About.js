import React from 'react';
import NavBar from '../navbar/NavBar';
import image from './image.jpg'
import style from './About.module.css'
import zac1 from './Gallery/zac1.jpg'
import justinAndDylan from './Gallery/justinAndDylan.jpg'
import mish1 from './Gallery/mish1.jpg'
import mish2 from './Gallery/mish2.jpg'
import mish3 from './Gallery/mish3.jpg'
import wil1 from './Gallery/wil1.jpg'
import nick2 from './Gallery/nick2.jpg'
import zacAndWil from './Gallery/zacAndWil.jpg'


const About = (props) => {
    return (
        <div className={style.aboutContainer}>
            <NavBar />
            <h1>About</h1>
            <div className={style.imageContainer}>
                <img className={style.image} src={image} alt="press-shot" />
            </div>

            <div className={style.contentContainer}>
                <div className={style.bioContainer}>
                    <div className={style.bioContent}>

                        <h3>Biography</h3>
                        <p>Since 2009, Eminence Ensemble has been building their fan-base through explosive live shows and unique genre-blending. The Colorado-based group infuses elements of Jazz, Rock, Electronic, Metal, Soul/Funk, and Hip-Hop to create intricate compositions, decorated with psychadelic improvisations</p>
                        <hr />
                        <p>The band is comprised of six members: Tanner Bardin [Drums], Nick Baum [Percussion/Lead Vocal], Wil Snyder [Keyboard/Synth], Zac Flynn [Bass/Synth/Vocals], Dylan Gleit [Guitar] & Justin Neely [Guitar/Vocals], making a solid framework for a huge sound and a whirlwind of creativity. </p>
                        <hr />
                        <p>Gaining their following first as a live band, Eminence Ensemble learned to capture the crowd with high-energy performances and large-scale production, with a light show just as dynamic as the music. And although they mainly thrive in the Jam Scene, the band is recognized by fans of all genres. Eminence Ensemble has become known for their complex song structures, heavy bass-drops, synchronized guitar-lines, dense vocal-harmonies, and powerful dual-percussion, both on-stage and in-studio.</p>
                        <hr />
                        <p>The sextet focuses most on creating a one-of-a-kind show for their followers. Each set list is carefully constructed to capture the vibe of the venue and the energy of the audience. With over 400 shows under their belt, Eminence Ensemble has proven their worth in the scene, playing festival slots at Summer Camp, Electric Forest, Camp Bisco, Wave Spell, Euphoria, The Werkout, and more.</p>
                    </div>
                </div>
                <div className={style.galleryContainer}>
                    <img src={zac1} alt="zac1" />
                    <img src={justinAndDylan} alt="justinAndDylan" />
                    <img src={mish1} alt="mish1" />
                    <img src={mish2} alt="mish2" />
                    <img src={mish3} alt="mish3" />
                    <img src={nick2} alt="nick2" />
                    <img src={wil1} alt="wil1" />
                    <img src={zacAndWil} alt="zacAndWil" />
                </div>
            </div>
        </div>
    )
}

export default About
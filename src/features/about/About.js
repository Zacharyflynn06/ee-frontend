import style from './About.module.css'

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <h1>About</h1>
            <div className={style.imageContainer}>
                <img className={style.image} src={process.env.PUBLIC_URL + 'images/press-shot.jpg'}  alt="press-shot" />
            </div>

            <div className={style.contentContainer}>
                <div className={style.bioContainer}>
                    <div className={style.bioContent}>

                        <div className={style.bioTitle}>Biography</div>
                        <p>Since 2009, Eminence Ensemble has been building their fan-base through explosive live shows and unique genre-blending. The Colorado-based group infuses elements of Jazz, Rock, Electronic, Metal, Soul/Funk, and Hip-Hop to create intricate compositions, decorated with psychadelic improvisations</p>
                       
                        <p>The band is comprised of six members: Tanner Bardin [Drums], Nick Baum [Percussion/Lead Vocal], Wil Snyder [Keyboard/Synth], Zac Flynn [Bass/Synth/Vocals], Dylan Gleit [Guitar] & Justin Neely [Guitar/Vocals], making a solid framework for a huge sound and a whirlwind of creativity. </p>
                        
                        <p>Gaining their following first as a live band, Eminence Ensemble learned to capture the crowd with high-energy performances and large-scale production, with a light show just as dynamic as the music. And although they mainly thrive in the Jam Scene, the band is recognized by fans of all genres. Eminence Ensemble has become known for their complex song structures, heavy bass-drops, synchronized guitar-lines, dense vocal-harmonies, and powerful dual-percussion, both on-stage and in-studio.</p>
                     
                        <p>The sextet focuses most on creating a one-of-a-kind show for their followers. Each set list is carefully constructed to capture the vibe of the venue and the energy of the audience. With over 400 shows under their belt, Eminence Ensemble has proven their worth in the scene, playing festival slots at Summer Camp, Electric Forest, Camp Bisco, Wave Spell, Euphoria, The Werkout, and more.</p>
                    </div>
                </div>
                <div className={style.galleryContainer}>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/1.jpg'} alt="1"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/2.jpg'} alt="2"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/3.jpg'} alt="3"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/4.jpg'} alt="4"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/5.jpg'} alt="5"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/6.jpg'} alt="6"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/7.jpg'} alt="7"/>
                    <img src={process.env.PUBLIC_URL + 'images/gallery/8.jpg'} alt="8"/>

                </div>
            </div>
        </div>
    )
}

export default About
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1>About</h1>
      <div className={style.imageContainer}>
        <img
          className={style.image}
          src={process.env.PUBLIC_URL + "images/press-shot.jpg"}
          alt="press-shot"
        />
      </div>

      <div className={style.contentContainer}>
        <div className={style.bioContainer}>
          <div className={style.bioContent}>
            <div className={style.bioTitle}>Biography</div>

            <p>
              Since 2009, Eminence Ensemble has provided people from all walks
              of life with a sense of community, a safe space for expression, a
              needed break from the pressures of life, and a thrilling rush of
              adrenaline through complex, yet digestible music that bridges the
              gap between the jam-band and more traditional music scenes.
            </p>

            <p>
              The Colorado-based sextet, comprised of members Tanner Bardin
              [drums], Nick Baum [vocals, percussion], Wil Snyder [keyboard,
              synth], Zac Flynn [bass, synth, vocals], Dylan Gleit [guitar,
              vocals] & Justin Neely [guitar, vocals], has been steadily
              building their fan-base through explosive live shows featuring a
              unique conglomerate of genre-blending compositions. The
              archipelago of sonic worlds put forth by the band features
              elements of rock, funk, metal, electronic, soul, and hip-hop that
              together create an intricate foundation to be decorated by
              exploratory improvisational jams in a unique way, every show.
            </p>

            <p>
              Gaining their following first as a live band, Eminence Ensemble
              learned to capture the crowd with high-energy performances and
              large-scale production, with a light show just as dynamic as the
              music. Although they mainly thrive in the jam scene, the band is
              recognized and loved by fans of all genres. Eminence Ensemble has
              become known for their complex song structures, harmonized
              dual-guitar lines, heavy bass drops, dense vocal harmonies, and
              powerful percussion, both on stage and in the studio.
            </p>

            <p>
              The sextet focuses most on creating a one-of-a-kind show for their
              fans each night. Every set list is carefully constructed to
              capture the vibe of the night, resulting in a continuous energy
              exchange between the band and audience that strengthens with every
              cycle. With over 400 shows under their belt, Eminence Ensemble has
              proven their worth in the scene, playing festival slots at Summer
              Camp, Electric Forest, Camp Bisco, Wave Spell, Euphoria, Gem &
              Jam, The Werkout, Same Same But Different, and many others.
            </p>
          </div>
        </div>
        <div className={style.galleryContainer}>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/1.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/1.jpg"}
              alt="1"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/2.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/2.jpg"}
              alt="2"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/3.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/3.jpg"}
              alt="3"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/4.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/4.jpg"}
              alt="4"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/5.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/5.jpg"}
              alt="5"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/6.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/6.jpg"}
              alt="6"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/7.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/7.jpg"}
              alt="7"
            />
          </a>
          <a
            href={process.env.PUBLIC_URL + "images/gallery/8.jpg"}
            target="new"
          >
            <img
              src={process.env.PUBLIC_URL + "images/gallery/8.jpg"}
              alt="8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

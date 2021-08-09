import React from 'react';
import NavBar from '../navbar/NavBar';
import style from './Home.module.css'
import logo from './logo.png'

const Home = (props) => {
    return (
        <div className={style.homeContainer}>
            <div className={style.title_container}>
                {/* <h1 className={styles.title}>Eminence Ensemble</h1> */}
                <img className={style.logo} src={logo} alt="logo" />
            </div>
                <NavBar></NavBar>
        </div>
    )
}

export default Home
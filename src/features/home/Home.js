import React from 'react';
import NavBar from '../navbar/NavBar';
import styles from './Home.module.css'


const Home = (props) => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>Eminence Ensemble</h1>
                {/* <img src="src/logo.png" alt="logo" /> */}
            </div>
                <NavBar></NavBar>
        </div>
    )
}

export default Home
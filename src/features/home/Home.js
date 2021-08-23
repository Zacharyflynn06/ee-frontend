import React from 'react';
import NavBar from '../navbar/NavBar';
import style from './Home.module.css'
import logo from './logo.png'
import Footer from '../footer/Footer';
const Home = (props) => {
    return (
        <div className={style.homeContainer}>
            <div className={style.title_container}>
                <img className={style.logo} src={logo} alt="logo" />
            </div>
            <NavBar />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
import React from 'react';
import NavBar from '../navbar/NavBar';
import style from './Home.module.css'
import logo from './logo.png'

const Home = (props) => {
    return (
        <div className={style.homeContainer}>
            <div className={style.title_container}>
                <img className={style.logo} src={logo} alt="logo" />
            </div>
            <NavBar toggleMenu={props.toggleMenu}/>
            
        </div>
    )
}

export default Home
import React, {useState }from 'react'
import Home from '../home/Home';
import style from './Menu.module.css'

const Menu = () => {

    const [isActive, setActive] = useState("false")
    
    const toggleMenu = () => {
        setActive(!isActive)
    }


    return ( 
        <div className={style.menuWrap}>
            <input type="button" id={style.toggler} className={isActive ? style.active : ""} onClick={toggleMenu}/>
            <div className={style.hamburger}><div></div></div>
            <div class={style.menu}>
                <div>
                    <div>
                        <Home toggleMenu={toggleMenu}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Menu;
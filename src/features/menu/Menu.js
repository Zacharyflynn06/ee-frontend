import React, {useState} from 'react'
import Home from '../home/Home';
import style from './Menu.module.css'
// import { toggleIsActive } from './MenuSlice';
import { useDispatch } from 'react-redux';

const Menu = () => {

    const [isActive, setActive] = useState(false)

    // const dispatch = useDispatch()

    const toggleMenu = () => {
        isActive ? setActive(false) : setActive(true)
    }

    return ( 
        <div className={style.menuWrap}>
            <input type="button" id={style.toggler} className={isActive ? style.active : ""} onClick={toggleMenu}/>
            <div className={style.hamburger}><div></div></div>
            <div className={style.menu}>
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
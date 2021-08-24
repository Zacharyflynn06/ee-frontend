import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import Home from '../home/Home';
import style from './Menu.module.css'

const Menu = () => {
    const location = useLocation()
    const [isActive, setActive] = useState(false)

    // const dispatch = useDispatch()

    const toggleMenu = () => {
        isActive ? setActive(false) : setActive(true)
    }

    if (location.pathname === '/') {
        return ( <></>)
    } else {
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

}
 
export default Menu;
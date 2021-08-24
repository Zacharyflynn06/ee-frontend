import React from 'react'
import Home from '../home/Home';
import style from './Menu.module.css'

const Menu = () => {
    return ( 
        <div className={style.menuWrap}>
            <input type="checkbox" class={style.toggler} />
            <div className={style.hamburger}><div></div></div>
            <div class={style.menu}>
                <div>
                    <div>
                        <Home />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Menu;
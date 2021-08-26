import style from './Footer.module.css'

const Footer = () => {
    return ( 
        <div className={style.footerContainer}>
            <div className={style.copyright}>
                <h4>&copy; Zac Flynn 2021</h4>

            </div>
        </div>
    );
}
 
export default Footer;
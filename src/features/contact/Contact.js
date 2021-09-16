import style from './Contact.module.css'

const Contact = () => {
    return (
        <div className={style.contactContainer}>
            <h1>Contact</h1>
            <div className={style.contactWrapper}>
                <div className={style.contactTitle}>
                    Booking 
                </div>
                <div className={style.contactDetails}>
                    <div>Jordan Carriere</div>
                    <a href="mailto:jordan@alpine-partners.net">jordan@alpine-partners.net</a>  
                </div>
            </div>
            <div className={style.contactWrapper}>
                <div className={style.contactTitle}>
                    Management
                </div>
                <div className={style.contactDetails}>
                    <div>Taylor Reed</div>
                    <a href="tank@mindwarpmgmt.com">tank@mindwarpmgmt.com</a>
                </div>
                <div className={style.contactDetails}>
                    <div>Will Kertzman</div>
                    <a href="mailto:will@mindwarpmgmt.com">will@mindwarpmgmt.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
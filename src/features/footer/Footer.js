import style from './Footer.module.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"


const SignupForm = ({ status, message, onValidated}) => {


}

const Footer = () => {
    return ( 
        <div className={style.footerContainer}>

            <div className={style.signupContainer}>
                <MailchimpSubscribe 
                    url={process.env.REACT_APP_MAILCHIMP_URL}
                    render={({ subscribe, status, message }) => (
                        <SignupForm
                            status={status} 
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />

            </div>

            <div className={style.copyright}>
                <h4>&copy; Zac Flynn 2021</h4>
            </div>

        </div>
    );
}
 
export default Footer;
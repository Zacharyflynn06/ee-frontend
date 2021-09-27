import style from './Footer.module.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import MailchimpForm from './MailchimpForm';
import toast from 'react-hot-toast';

const Footer = () => {

    const url = process.env.REACT_APP_MAILCHIMP_URL
    return ( 
        <div className={style.footerContainer}>

            <div className={style.signupContainer}>
                <MailchimpSubscribe 
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <MailchimpForm
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
            <div>
                
            </div>

        </div>
    );
}
 
export default Footer;
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
            <div className={style.contact}>
                booking: <a href="mailto:jordan@alpine-partners.net">jordan@alpine-partners.net</a><br />
                management: <a href="tank@mindwarpmgmt.com">tank@mindwarpmgmt.com</a>

            </div>

        </div>
    );
}
 
export default Footer;
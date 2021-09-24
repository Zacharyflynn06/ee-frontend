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
                    <div>
                        <MailchimpForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                        {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                        {status === "success" && toast.success("Thank You for Subscribing!")} */}
                    </div>    
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
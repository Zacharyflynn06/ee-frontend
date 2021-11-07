import style from "./Footer.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailchimpForm from "./MailchimpForm";
// import toast from 'react-hot-toast';

const Footer = () => {
  const url = process.env.REACT_APP_MAILCHIMP_URL;
  return (
    <div className={style.footerContainer}>
      <div className={style.col}>
        <div className={style.signupContainer}>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <MailchimpForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
      <div className={style.col}>
        <div className={style.copyrightContainer}>
          <div className={style.copyright}>&copy; Zac Flynn 2021</div>
        </div>
      </div>
      <div className={style.col}>
        <div className={style.contactContainer}>
          booking:
          <a href="mailto:jordan@alpine-partners.net">
            jordan@alpine-partners.net
          </a>
          <br />
          management:
          <a href="tank@mindwarpmgmt.com">tank@mindwarpmgmt.com</a>
          <a href="mailto:will@mindwarpmgmt.com">will@mindwarpmgmt.com</a>
          <a href="mailto:tynan@mindwarpmgmt.com">tynan@mindwarpmgmt.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

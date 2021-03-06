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
          <div className={style.copyright}>&copy; Zac Flynn 2022</div>
        </div>
      </div>
      <div className={style.col}>
        <div className={style.contactContainer}>
          <span>booking:</span>
          <a href="mailto:jordan@alpine-partners.net">
            jordan@alpine-partners.net
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

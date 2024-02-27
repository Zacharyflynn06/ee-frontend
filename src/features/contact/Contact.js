import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <h1>Contact</h1>
      <div className={style.contactWrapper}>
        <div>
          <h2 className={style.contactTitle}>Booking</h2>
        </div>

        <div className={style.contactDetails}>
          <div className={style.contactName}>Justin Long</div>
          <a href="mailto:justin@looseleaftalentagency.com">
            Justin@looseleaftalentagency.com
          </a>
        </div>

        <div className={style.contactTitle}>
          <h2>Management</h2>
        </div>

        <div className={style.contactDetails}>
          <div className={style.contactName}>Kayleigh Greer</div>
          <a href="mailto:kayleigh@eminenceensemble.com">
            kayleigh@eminenceensemble.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

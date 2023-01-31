import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <h1>Contact</h1>
      <div className={style.contactWrapper}>
        {/* <div className={style.contactTitle}>
                    Booking 
                </div> */}
        <div>
          <h2 className={style.contactTitle}>Booking</h2>
        </div>

        <div className={style.contactDetails}>
          <a href="mailto:Tanner@worldmusicdevelopment.org">
          Tanner@worldmusicdevelopment.org
          </a>
        </div>
        {/* <div className={style.contactTitle}>
                    Management
                </div> */}
        <div className={style.contactTitle}>
          <h2>Management</h2>
        </div>

        <div className={style.contactDetails}>
          <div className={style.contactName}>Jason Morris</div>
          <a href="jason@eminenceensemble.com">jason@eminenceensemble.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

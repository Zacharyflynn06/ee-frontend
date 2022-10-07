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
          <div className={style.contactName}>Jordan Carriere</div>
          <a href="mailto:jordan@alpine-partners.net">
            jordan@alpine-partners.net
          </a>
        </div>
        {/* <div className={style.contactTitle}>
                    Management
                </div> */}
        <div className={style.contactTitle}>
          <h2>Management</h2>
        </div>
        {/* <div className={style.contactDetails}>
          <div className={style.contactName}>Taylor Reed</div>
          <a href="tank@mindwarpmgmt.com">tank@mindwarpmgmt.com</a>
        </div>
        <div className={style.contactDetails}>
          <div className={style.contactName}>Will Kertzman</div>
          <a href="mailto:will@mindwarpmgmt.com">will@mindwarpmgmt.com</a>
        </div>
        <div className={style.contactDetails}>
          <div className={style.contactName}>Tynan Conroy</div>
          <a href="mailto:tynan@mindwarpmgmt.com">tynan@mindwarpmgmt.com</a>
        </div> */}

        {/* <div className={style.contactTitle}>
          <h2>Business Manager</h2>
        </div> */}
        <div className={style.contactDetails}>
          <div className={style.contactName}>Jason Morris</div>
          <a href="jason@eminenceensemble.com">jason@eminenceensemble.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import styles from "./index.module.scss";
import GoogleIcon from '../../assets/images/google.svg'
import { Link } from "react-router-dom";

const AuthenticationForm = () => {
  return (
    <div className={styles.form_main_container}>
      <form className={styles.form}>
        <div className={`${styles.email_container} ${styles.input_container}` }>
          <label>Email</label>
          <input className={styles.mr_bt} />
        </div>
        <div className={`${styles.relative_container} ${styles.input_container}`}>
          <label>Password (6 or more characters)</label>
          <input className={styles.relative_input} />
          <span className={styles.show_span}>Show</span>
        </div>
        <p className={styles.para}>
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <span>User Agreement, Privacy Policy</span>, and{" "}
          <span>Cookie Policy.</span>
        </p>
        <input type="submit" value="Agree & Join" className={styles.submit} />
      </form>
      <div className={styles.other_opt_container}>
        <p className={styles.or_txt}>or</p>
      </div>
      <div className={styles.last_container}>
        <button className={styles.google_btn}>
            Sign in with gmail
            <img src={GoogleIcon} alt='gmail_icon'  width={20} height={20}/>
        </button>
        <p className={styles.last_para}>Already on LinkedIn? <Link to='/sign-in' className={styles.span}>Sign in</Link></p>
      </div>
    </div>
  );
};

export default AuthenticationForm;

import React from "react";
import styles from "./index.module.scss";
import LogoIcon from "../../assets/images/logo.svg";
import AuthenticationForm from "../../components/authentication_form";
import SignUpFormFooterContent from "../../components/footer";

export default function Authentication() {
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper_container}>
        <header>
          <img src={LogoIcon} alt={`${LogoIcon}`} className={styles.logo} />
        </header>
        <section className={styles.form_section}>
           <h1>Make the most of your professional life</h1> 
           <AuthenticationForm />
           <p>Lookin to create a page for business? <span>Get help</span></p>
        </section>
      </div>
      <footer>
          <SignUpFormFooterContent />
        </footer>
    </div>
  );
}

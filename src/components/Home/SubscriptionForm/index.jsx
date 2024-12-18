import React from 'react';
import styles from './index.module.css'; // Import the CSS file for styling
import Button from "../../common/Button";
const SubscriptionForm = () => {
  return (
    <section className={styles["subscription-container"]}>
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <form className={styles["subscription-form"]}>
        <input
          type="email"
          placeholder="Your Email"
          className={styles["email-input"]}
          required
        />
          <Button text="Subscribe" type="submit"  className="primary" />
      </form>
    </section>
  );
};

export default SubscriptionForm;

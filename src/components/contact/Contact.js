import React, { useRef, useState } from "react";

import styles from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sentMail, setSentMail] = useState(false);
  const form = useRef();
  const toggleSentMail = () => {
    setSentMail(true);
    setTimeout(() => {
      setSentMail(false);
    }, 5000);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toggleSentMail();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className={`container ${styles["contact__container"]}`}>
        <div className={styles["contact__options"]}>
          <article className={styles["contact__option"]}>
            <MdOutlineEmail className={styles["contact__option-icon"]} />
            <h4>E-Mail</h4>
            <h5>arash.salamii@gmail.com</h5>
            <a href='mailto:arash.salamii@gmail.com' target='_blank' rel='noreferrer'>
              Send An E-Mail
            </a>
          </article>
          <article className={styles["contact__option"]}>
            <RiMessageLine className={styles["contact__option-icon"]} />
            <h4>Whatsapp</h4>
            <h5>+989113934238</h5>
            <a href='https://wa.me/989113934238' target='_blank' rel='noreferrer'>
              Send a Message
            </a>
          </article>
          <article className={styles["contact__option"]}>
            <FaTelegramPlane className={styles["contact__option-icon"]} />
            <h4>Telegram</h4>
            <h5>Arash_s88</h5>
            <a href='https://telegram.me/Arash_s88' target='_blank' rel='noreferrer'>
              Send a Message
            </a>
          </article>
        </div>
        {sentMail ? (
          <h4 style={{ display: "grid", placeItems: "center" }}>
            Your message was sent successfully
          </h4>
        ) : (
          <form ref={form} name='contact' onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your E-Mail' required />
            <textarea name='message' cols='7' rows='10' placeholder='Your Message' required />
            <button className='btn btn-primary' type='submit'>
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;

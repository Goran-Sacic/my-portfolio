import { useState, useEffect, useRef } from "react";
import Title from "./Title";
import styles from "./ContactForm.module.css";

import emailjs from "@emailjs/browser";

const questions = [
  {
    id: "1",
    question: "Da li je fotografiranje cool?",
    type: "checkbox",
    options: ["Da! Naravno", "Pa ne baš...", "A ovisi!"],
    answer: "Da! Naravno",
  },
  {
    id: "2",
    question: "Za koji nogometni klub navijam?",
    type: "checkbox",
    options: ["NK Drogeri", "NK Mamlazi", "NK Varaždin"],
    answer: "NK Varaždin",
  },
  {
    id: "3",
    question: "Moja omiljena hrana je?",
    type: "checkbox",
    options: ["Hajdina kaša (fuj!!)", "Pizza", "Čušpajz"],
    answer: "Pizza",
  },
  {
    id: "4",
    question: "Tko se baš svugdje gura?",
    type: "checkbox",
    options: ["Rex", "Kex", "Max"],
    answer: "Max",
  },
  {
    id: "5",
    question: "Najbolji glazbeni žanr?",
    type: "checkbox",
    options: ["Jodlanje", "Turbofolk", "Synthwave"],
    answer: "Synthwave",
  },
];

export default function ContactForm({ id, title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formReady, setFormReady] = useState(false);

  const kontakt = {
    name: name,
    email: email,
    message: message,
  };

  const form = useRef();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setRandomQuestion(questions[randomIndex]);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  function isEmailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (firstRender) {
        setFirstRender(!firstRender);
      } else {
        if (!isEmailValid(email)) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [email]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setSelectedAnswer(event.target.value);
    if (selectedAnswer === randomQuestion.answer) {
      setWrongAnswer(false);
    } else {
      setWrongAnswer(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (firstRender) {
        setFirstRender(!firstRender);
      } else {
        if (selectedAnswer != randomQuestion.answer) {
          setWrongAnswer(true);
        } else {
          setWrongAnswer(false);
        }
      }
    }, 0.2);
    return () => clearTimeout(timer);
  }, [selectedAnswer]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(!firstRender);
    } else {
      if (
        (name.length < 2) |
        (email.length < 2) |
        (message.length < 2) |
        (emailError === true)
      ) {
        setError(true);
        setHasError(true);
      } else {
        setError(false);
        setHasError(false);
      }
    }
  }, [name, email, message, emailError]);

  useEffect(() => {
    if (
      !wrongAnswer &&
      name.length >= 2 &&
      email.length >= 2 &&
      message.length >= 2 &&
      isEmailValid(email)
    ) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [selectedAnswer, wrongAnswer, name, email, message]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formReady) {
      if (!hasError && selectedAnswer === randomQuestion.answer) {
        setWrongAnswer(false);

        if ((error === true) | (hasError === true) | (emailError === true)) {
          return;
        }

        setSendingMessage(true);

        await emailjs
          .sendForm(
            "service_ettp05g",
            "template_g3vvmzs",
            form.current,
            "X5tEW8VKZb3Pb1Df-"
          )
          .then(
            (result) => {
              /*  console.log(result.text); */

              setMessageSent(true);
              setName("");
              setEmail("");
              setMessage("");
              setWrongAnswer(false);
            },
            (error) => {
              /* console.log(error.text); */
            }
          );

        setSendingMessage(false);
      } else {
        setRandomQuestion(
          questions[Math.floor(Math.random() * questions.length)]
        );
        setSelectedAnswer("");
        setWrongAnswer(true);
      }
      setRandomQuestion(
        questions[Math.floor(Math.random() * questions.length)]
      );
      setSelectedAnswer("");
      setFirstRender(true);
    }
  };

  const handleSendNewMessage = () => {
    setMessageSent(false);
  };

  const sendUserToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSelectedAnswer(null);
    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
    setError(false);
    setHasError(false);
    setEmailError(false);
    setWrongAnswer(false);
    setMessageSent(false);
    setSendingMessage(false);
  };

  return (
    <div className={styles.formContainer}>
      <Title id={id} title={title} />

      {!messageSent ? (
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <p>
            Slobodno mi pošaljite poruku koristeći obrazac u nastavku i povratno
            ću Vas kontaktirati u najkraćem mogućem roku!
          </p>
          <div className={styles.formItem}>
            <label htmlFor="name">Ime i prezime</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Ime i prezime"
              value={name}
              onChange={handleNameChange}
              className={styles.formInput}
              aria-label="Ime i prezime"
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="email">E-pošta</label>
            <input
              type="text"
              id="email"
              name="user_email"
              placeholder="E-pošta"
              value={email}
              onChange={handleEmailChange}
              className={styles.formInput}
              aria-label="E-pošta"
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message">Poruka</label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Poruka"
              value={message}
              onChange={handleMessageChange}
              className={styles.formMessageInput}
              aria-label="Poruka"
            />
          </div>
          {randomQuestion && (
            <fieldset className={styles.checker}>
              <legend className={styles.legend}>
                Provjera znanja (security check)! {randomQuestion.question}
              </legend>
              {randomQuestion.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={option}
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleCheckboxChange}
                    aria-label={option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </fieldset>
          )}
          <div className={styles.answerFeedback}>
            <div className={styles.buttonSpacing}>
              <button
                type="submit"
                disabled={sendingMessage}
                className={styles.btn}
              >
                Pošalji
              </button>
              <button
                type="button"
                className={styles.btn}
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
            {hasError ? (
              <p>
                Niste pravilno ispunili sva polja! Provjerite vaš unos
                (minimalno dva znaka po polju)!
              </p>
            ) : (
              ""
            )}
            {emailError ? <p>Email nije pravilno unesen.</p> : ""}
            {wrongAnswer ? <p>Pogrešan odgovor!</p> : ""}
          </div>
          {sendingMessage ? <p>Šaljem...</p> : ""}
        </form>
      ) : (
        <div className={styles.messageWasSent}>
          <div>
            {messageSent ? (
              <p>
                Vaša poruka je uspješno poslana. Hvala! Kontaktirati ću Vas u
                najkraćem mogućem roku.
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <button onClick={handleSendNewMessage} className={styles.btn2}>
              Pošalji novu poruku
            </button>
            <button onClick={sendUserToTop} className={styles.btn2}>
              Vrati me na početak
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

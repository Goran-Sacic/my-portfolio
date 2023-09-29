import { useState, useEffect } from "react";
import Link from "next/link";
import Title from "./Title";
import styles from "./ContactForm.module.css";

import { doc, setDoc } from "firebase/firestore";
import db from "./Firebase";

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
];

export default function ContactForm({ id, title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const kontakt = {
    name: name,
    email: email,
    message: message,
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setRandomQuestion(questions[randomIndex]);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedAnswer === randomQuestion.answer) {
      console.log("Correct Answer!");

      try {
        const response = await fetch(
          "https://myportfolio-contact-6c676-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
          {
            method: "POST",
            body: JSON.stringify(kontakt),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Data is: " + data);

        if (response.ok) {
          setMessageSent(true);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Incorrect Answer! Please try again.");
      setName("");
      setEmail("");
      setMessage("");
      setRandomQuestion(
        questions[Math.floor(Math.random() * questions.length)]
      );
      setSelectedAnswer("");
    }
  };

  const handleSendNewMessage = () => {
    setMessageSent(false);
  };

  const sendUserToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <div /* id="contact" */>
      <Title id={id} title={title} />
      {!messageSent ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Ime i prezime</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Vaše ime i prezime"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">E-pošta</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Vaša e-pošta"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="message">Poruka</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Vaša poruka"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          {randomQuestion && (
            <fieldset>
              <legend>Provjera znanja! {randomQuestion.question}</legend>
              {randomQuestion.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </fieldset>
          )}
          <button type="submit">Pošalji</button>
        </form>
      ) : (
        <div>
          <p>
            Vaša poruka je uspješno poslana. Hvala! Kontaktirati ću Vas u
            najkraćem mogućem roku.
          </p>
          <button onClick={handleSendNewMessage}>Pošalji novu poruku</button>
          <button onClick={sendUserToTop}>Vrati me na početak</button>
        </div>
      )}
    </div>
  );
}

/* <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.What is Lorem Ipsum? Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem
        Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem
        Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p> */

{
  /* <form>
        <fieldset>
          <legend>Provjera znanja! {question.pitanje}</legend>
          <div>
            <input
              type="checkbox"
              name={question.odgovor1}
              id={question.id}

              
            />
            <label for={question.odgovor1}>{question.odgovor1}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name={question.odgovor2}
              id={question.id}
              
            />
            <label for={question.odgovor2}>{question.odgovor2}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name={question.odgovor3}
              id={question.id}
              
            />
            <label for={question.odgovor3}>{question.odgovor3}</label>
          </div>
        </fieldset>
      </form> */
}

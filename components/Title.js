import styles from "./Title.module.css";

export default function Title(props) {
  return (
    <div className={styles.text}>
      <div id={props.id} className={styles.hidden}></div>
      <h1>{props.title}</h1>
    </div>
  );
}

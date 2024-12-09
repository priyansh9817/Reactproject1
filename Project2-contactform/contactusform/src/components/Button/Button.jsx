import styles from "./Button.module.css";  

const Button = (props) => {
  return (<>
    <button className={props.isOutline ? styles.Outline_btn : styles.primary_btn}>{props.icons} {props.text}</button>
    


    </>


  );
};

export default Button;

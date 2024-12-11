import styles from "./Button.module.css";

const Button = ({ isOutline, icons, text, ...rest }) => {
  return (
    <button 
      {...rest}
      className={isOutline ? styles.Outline_btn : styles.primary_btn}
    >
      {icons} {text}
    </button>
  );
};

export default Button;

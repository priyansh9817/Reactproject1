import styles from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
const Form = () => {
    return <div className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.topbutton}>
                <div><Button text="VIA CHART SUPPORT" icons={<MdMessage fontSize="24px" />}></Button></div>
                <div><Button text="VIA CAll" icons={<MdAddCall fontSize="24px" />}></Button></div>
            </div>
            <div><Button isOutline={true} 
            text="VIA EMAIL FORM" icons={<IoMail fontSize="24px" />}></Button></div>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="" />
        </div>
    </div>
}

export default Form;

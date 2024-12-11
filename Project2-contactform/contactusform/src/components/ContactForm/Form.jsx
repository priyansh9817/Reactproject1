import styles from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage, MdAddCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import React,{useState} from "react";

const Form = () => {
    const [name , setName] = useState("");
    const [email , setemail] = useState("")
    const [text , settext] = useState("")
  
    const onSubmit = (event) =>{
        event.preventDefault();
        setName(event.target[0].value)
        setemail(event.target[1].value)
        settext(event.target[2].value)
    };

    return (
        <div className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.topbutton}>
                    <Button 
                        text="VIA CHAT SUPPORT" 
                        icons={<MdMessage fontSize="24px" />} 
                    />
                    <Button 
                        text="VIA CALL" 
                        icons={<MdAddCall fontSize="24px" />} 
                    />
                </div>
                <Button 
                    isOutline={true} 
                    text="VIA EMAIL FORM" 
                    icons={<IoMail fontSize="24px" />} 
                />
                 <form onSubmit={onSubmit} >
                <div className={styles.form_container}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.form_container}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.form_container}>
                    <label htmlFor="textarea">Textarea</label>
                    <textarea name="" id="" rows='8'></textarea>
                </div>
                <div style={
                    {
                        display:"flex",
                        justifyContent:"end",
                    }
                }>
                <Button text="submit"/>
                </div>
                <div>{name + " " + email + " " + text}</div>
            </form >
            </div>
           
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="Contact illustration" />
            </div>
        </div>
    );
};

export default Form;

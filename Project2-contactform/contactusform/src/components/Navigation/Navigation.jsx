import styles from './Navigation.module.css';
const Navigation = () =>{
    return <div className={styles.container}>
        <div className={styles.logo}>
            <img src="/public/images/logo.png" alt="" />
        </div>
        <div className={styles.list}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Conatct us</li>
            </ul>
        </div>
    </div>
}

export default Navigation;
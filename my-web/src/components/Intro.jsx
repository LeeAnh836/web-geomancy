import styles from '../styles/Intro.module.scss';

function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h1>About our brand</h1>
                <p>
                    Tell people about who you are, your origin, your process, or your inspirations. 
                    You've got this. The way you tell your story online can make all the difference.
                </p>
                <p>
                    Don't worry about sounding professional. There are over 1.5 billion websites out there, 
                    but your story is what’s going to separate this one from the rest.
                </p>
            </div>
            <div className={styles.imageSection}>
                <img src="/images/ngole.png" alt="Brand" />
            </div>
        </div>
    );
}

export default Intro;

import styles from "../styles/Contact.module.scss";
import { useState } from "react";
import Popup from "./Popup"; // File này sẽ xử lý hiển thị popup

function Contact() {
    const [popupContent, setPopupContent] = useState(null);

    return (
        <div className={styles["contact-container"]}>
            <h1>Contact us</h1>
            <div className={styles["contact-list"]}>
                {/* Số điện thoại */}
                <div className={styles["contact-item"]} onClick={() => setPopupContent("Số điện thoại: 0867-091-391")}>
                    <img src="/images/phone_logo.png" alt="Số điện thoại" />
                    <p>Số điện thoại</p>
                </div>

                {/* Zalo */}
                <div className={styles["contact-item"]} onClick={() => setPopupContent(<img src="/zalo-qr.png" alt="QR Zalo" />)}>
                    <img src="/images/zalo_logo.png" alt="Zalo" />
                    <p>Zalo</p>
                </div>

                {/* Facebook */}
                <div className={styles["contact-item"]} onClick={() => window.open("https://www.facebook.com/your-profile", "_blank")}>
                    <img src="/images/facebook_logo.png" alt="Facebook" />
                    <p>Facebook</p>
                </div>

                {/* TikTok */}
                <div className={styles["contact-item"]} onClick={() => window.open("https://www.tiktok.com/@your-profile", "_blank")}>
                    <img src="/images/tiktok_logo.png" alt="Tiktok" />
                    <p>Tiktok</p>
                </div>
            </div>

            {/* Hiển thị popup khi cần */}
            {popupContent && <Popup content={popupContent} onClose={() => setPopupContent(null)} />}
        </div>
    );
}

export default Contact;

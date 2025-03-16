import { useState } from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Tiêu đề Website */}
        <h2 className={styles.siteTitle}>Điều Hướng</h2>

        {/* Cột Explore */}
        <div className={styles.column}>
          <h3>Khám Phá</h3>
          <ul>
            <li><a href="#intro">Giới Thiệu</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
            <li><a href="#product">Sản Phẩm</a></li>
            <li><a href="#services">Dịch Vụ</a></li>
          </ul>
        </div>

        {/* Cột Follow Us */}
        <div className={styles.column}>
          <h3>Theo Dõi</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/le.viet.ngo.880145" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowPopup(true); }}>
                Zalo
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Popup Zalo */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <img src="/images/qr-zalo.png" alt="QR Zalo" />
          </div>
        </div>
      )}

      {/* Dòng bản quyền */}
      <div className={styles.copyright}>
        &copy; 2024 NgoLe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

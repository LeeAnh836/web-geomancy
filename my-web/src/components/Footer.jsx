import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Tiêu đề Website */}
        <h2 className={styles.siteTitle}>Your Site Title</h2>

        {/* Cột Explore */}
        <div className={styles.column}>
          <h3>Explore</h3>
          <ul>
            <li><a href="#intro">Giới Thiệu</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
            <li><a href="#product">Sản Phẩm</a></li>
            <li><a href="#services">Dịch Vụ</a></li>
          </ul>
        </div>

        {/* Cột Follow Us */}
        <div className={styles.column}>
          <h3>Follow</h3>
          <ul>
            <li><a href="#">Email</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className={styles.copyright}>
        &copy; 2024 NgoLe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

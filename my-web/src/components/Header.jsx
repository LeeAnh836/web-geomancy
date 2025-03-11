import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Phong Thủy Đất Tổ</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#intro">Giới Thiệu</a></li>
            <li><a href="#product">Sản Phẩm</a></li>
            <li><a href="#services">Dịch Vụ</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

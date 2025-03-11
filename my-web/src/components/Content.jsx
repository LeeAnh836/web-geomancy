import styles from "../styles/Content.module.scss";
import Product from "./Product";
import Services from "./Services";
import Contact from "./Contact";
import Intro from "./Intro";

function Content() {
  return (
    <>
      <div className={styles["main-content"]}>
        <div className={styles["image-container"]}>
          {/* Logo đặt ở góc trên bên trái */}
          <img src="/images/logo.png" className={styles["logo-top-left"]} />

          {/* Ảnh nền */}
          <img src="/images/Light-background.png" className={styles["background-image"]} />

          {/* Nội dung chính */}
          <div className={styles["content"]}>
            <h1 className={styles["title"]}>Phong Thủy Đất Tổ</h1>
          </div>
        </div>
      </div>
      
      {/* Gắn id cho từng section */}
      <div id="intro"><Intro /></div>
      <div id="product"><Product /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default Content;

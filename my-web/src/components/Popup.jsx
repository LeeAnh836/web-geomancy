import styles from "../styles/Popup.module.scss";

function Popup({ content, onClose }) {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
}

export default Popup;

import styles from "../styles/Services.module.scss";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Dịch Vụ</h2>
      <div className={styles.serviceList}>
        <div className={styles.service}>
          <img src="/images/nha.png" alt="Basic Service" />
          <div className={styles.text}>
            <h3 className={styles.serviceTitle}>Tư Vấn Thiết Kế Phong Thủy, Xây Nhà</h3>
            <p>
              Phong thủy trong xây dựng nhà ở đóng vai trò quan trọng giúp gia chủ có cuộc sống an lành, tài lộc hanh thông. Khi thiết kế và xây dựng nhà, cần xem xét các yếu tố như hướng nhà, bố cục phòng ốc, vị trí cửa chính, cầu thang, bếp và phòng ngủ sao cho phù hợp với bản mệnh của gia chủ. Ngoài ra, việc lựa chọn vật liệu xây dựng, màu sắc và cách bố trí nội thất cũng cần được cân nhắc để đảm bảo sự hài hòa giữa con người và môi trường sống.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src="/images/ban_tho.png" alt="Intermediate Service" />
          <div className={styles.text}>
            <h3 className={styles.serviceTitle}>Tư Vấn Phong Thủy Âm Trạch, Mồ Mả</h3>
            <p>
              Phong thủy âm trạch có ảnh hưởng lớn đến con cháu đời sau. Khi lựa chọn đất đặt mộ, cần đảm bảo địa thế cao ráo, không bị ngập úng và có sinh khí tốt. Hướng mộ, vị trí đặt bia, cách bài trí khuôn viên phần mộ cũng cần phù hợp với tuổi của người đã khuất và con cháu trong gia đình. Nếu mồ mả gặp phải vấn đề phong thủy xấu, có thể gây ảnh hưởng không tốt đến hậu vận của gia tộc, do đó cần được xem xét và hóa giải kịp thời.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src="/images/nghe_nghiep.png" alt="Advanced Service" />
          <div className={styles.text}>
            <h3 className={styles.serviceTitle}>Tư Vấn Định Hướng Nghề Nghiệp Theo Thời Vận</h3>
            <p>
              Lựa chọn nghề nghiệp phù hợp không chỉ dựa vào sở thích và năng lực mà còn có thể xem xét theo phong thủy và vận mệnh. Dựa trên ngày tháng năm sinh, ngũ hành và tứ trụ, có thể xác định những ngành nghề phù hợp để phát triển sự nghiệp bền vững. Một số nghề hợp với hành Kim như tài chính, ngân hàng, kỹ thuật; nghề hợp với hành Mộc như giáo dục, y học, nông nghiệp; nghề hợp với hành Thủy như kinh doanh, du lịch, vận tải, v.v.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src="/images/doanh_nghiep.png" alt="Basic Service" />
          <div className={styles.text}>
            <h3 className={styles.serviceTitle}>Tư Vấn Doanh Nghiệp</h3>
            <p>
              Phong thủy doanh nghiệp giúp gia tăng tài lộc, ổn định và phát triển kinh doanh. Khi mở công ty, cần chọn vị trí văn phòng phù hợp, hướng cửa chính hợp mệnh người đứng đầu, cách bài trí bàn làm việc, quầy thu ngân, két sắt… sao cho kích hoạt tài lộc. Ngoài ra, việc bố trí không gian làm việc hợp lý giúp nhân viên làm việc hiệu quả, tăng sự gắn kết và sáng tạo. Nếu gặp khó khăn trong kinh doanh, có thể xem xét các giải pháp hóa giải phong thủy để cải thiện vận khí.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src="/images/ngay_dep.png" alt="Basic Service" />
          <div className={styles.text}>
            <h3 className={styles.serviceTitle}>Tư Vấn Chọn Ngày Cát Khi Khởi Sự</h3>
            <p>
              Việc chọn ngày giờ tốt để khai trương, động thổ, ký hợp đồng hay thực hiện các công việc quan trọng giúp công việc hanh thông, tránh điều xui rủi. Ngày cát được xác định dựa trên tuổi của người chủ, mục đích công việc và yếu tố thiên can địa chi. Ngoài ra, cần tránh các ngày xung khắc, ngày sát chủ, nguyệt kỵ để đảm bảo mọi việc thuận lợi.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src="/images/la_ban.png" alt="Basic Service" />
          <div className={styles.text}>
            <h3 className={styles.serviceTitle}>Tư Vấn Hóa Giải Phong Thủy, Kích Hoạt Tài Lộc</h3>
            <p>
              Nếu gặp các vấn đề như công việc trì trệ, sức khỏe kém, gia đình bất hòa, có thể do phong thủy nhà ở hoặc nơi làm việc chưa hài hòa. Việc hóa giải phong thủy có thể bao gồm điều chỉnh bố trí nhà cửa, thay đổi hướng giường ngủ, bàn làm việc, sử dụng các vật phẩm phong thủy như Tỳ Hưu, Thiềm Thừ, cây phong thủy… để kích hoạt tài lộc và cải thiện vận khí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

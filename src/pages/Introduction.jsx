import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";

import Header from '../components/Header/Header.jsx'
import BannerAndMenu from '../components/BannerAndMenu/BannerAndMenu.jsx'
import Footer from '../components/Footer/Footer.jsx'

import './Introduction.scss'

export default function Introduction() {
    return (
        <>
            <Header />
            <BannerAndMenu />
            <div className='introduction'>
                <div className='container'>
                    <span className='introduction-head'><span>Trang chủ</span><BsChevronDoubleRight />Giới thiệu</span>
                    <h3 className='introduction-title'>Câu chuyện của chúng tôi</h3>
                    <p className='introduction-desc'>Linhkiện RC được thành lập năm 2016 bởi những anh em yêu RC đã chơi và hoạt động lâu năm đặc biệt là Flycam, với phương châm: “Giúp bạn thực hiện ước mơ chinh phục bầu trời”. Chúng tôi mong muốn mang tới tất cả anh em chơi RC trên cả nước nguồn linh kiện tốt nhất với giá tốt nhất, cùng với đó là chế độ phục vụ chăm sóc khách hàng chuyên nghiệp để giúp anh em mới chơi có thể tiếp cận và chơi một cách dễ dàng nhất.
                        Các sản phẩm chúng tôi cung cấp gồm có: Linh kiện lắp ráp, phụ kiện và Flycam nguyên chiếc từ trung đến cao cấp. Tất cả sản phẩm của chúng tôi đều được nhập khẩu trực tiếp từ nước ngoài để có giá thành tốt nhất. chất lượng nhất và chế độ bảo hành, hậu mãi chuẩn nhất tới anh em.
                        Trong bối cảnh hiện nay, khi trên thị trường nhiều hàng trôi nổi không rõ nguồn gốc xuất xứ cũng như người bán qua mạng internet, Group FB, các trang thương mại điện tử không trung thực dẫn đến những sự cố đáng tiếc, thì chúng tôi càng ý thức được hơn trách nhiệm trong công việc của mình. Đến với LinhkienRC bạn sẽ được trải nghiệm dịch vụ tư vấn chuyên nghiệp, nhiệt tình cũng các sản phẩm chất lượng, giá rẻ
                        <br />
                        <br />
                        Chúng tôi luôn mong muốn ngày càng nâng cao chất lượng sản phẩm, dịch vụ và làm việc với tinh thần cầu thị để hoàn thiện bộ máy. Cũng như đào tạo đội ngũ chuyên nghiệp, nhằm phục vụ khách hàng bằng tất cả sự đam mê và nhiệt tình tuổi trẻ.
                        Tuy nhiên, LKRC cũng ý thức được rằng, việc bán hàng khá vất vả, giống như làm dâu trăm họ. Đội ngũ LKRC có thể khó tránh khỏi sai xót làm khách không hài lòng hoặc đơn giản là không vừa ý.Trong bất cứ trường hợp cần hỗ trợ. Linh Kiện RC luôn luôn ưu tiên quyền lợi của KH, hỗ trợ KH hết khả năng, hết mức tối đa. Nếu quý khách hàng có phản ánh hay góp ý vui lòng xin liên hệ tới số điện thoại chăm sóc khách hàng: 0943.952.008
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

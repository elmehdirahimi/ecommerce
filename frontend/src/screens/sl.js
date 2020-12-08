import React from "react";
import { Helmet } from "react-helmet";

const Sl = () => {
  return (
    <div className="col-md-6 col-lg-7 p-b-30">
      <Helmet>
        <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="vendor/animsition/js/animsition.min.js"></script>
        <script src="vendor/bootstrap/js/popper.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="vendor/select2/select2.min.js"></script>

        <script src="vendor/daterangepicker/moment.min.js"></script>
        <script src="vendor/daterangepicker/daterangepicker.js"></script>
        <script src="vendor/slick/slick.min.js"></script>
        <script src="js/slick-custom.js"></script>
        <script src="vendor/parallax100/parallax100.js"></script>
        <script src="vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>

        <script src="vendor/isotope/isotope.pkgd.min.js"></script>

        <script src="vendor/sweetalert/sweetalert.min.js"></script>

        <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
      </Helmet>

      <div className="p-l-25 p-r-30 p-lr-0-lg">
        <div className="wrap-slick3 flex-sb flex-w">
          <div className="wrap-slick3-dots" />
          <div className="wrap-slick3-arrows flex-sb-m flex-w" />
          <div className="slick3 gallery-lb">
            <div
              className="item-slick3"
              data-thumb="../uploads/1597605603365_1.jpg"
            >
              <div className="wrap-pic-w pos-relative">
                <img src="../uploads/1597605603365_1.jpg" alt="IMG-PRODUCT" />
                <a
                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                  href="../uploads/1597605603365_1.jpg"
                >
                  <i className="fa fa-expand" />
                </a>
              </div>
            </div>
            <div
              className="item-slick3"
              data-thumb="../uploads/1597605607082_2.jpg"
            >
              <div className="wrap-pic-w pos-relative">
                <img src="../uploads/1597605607082_2.jpg" alt="IMG-PRODUCT" />
                <a
                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                  href="../uploads/1597605607082_2.jpg"
                >
                  <i className="fa fa-expand" />
                </a>
              </div>
            </div>
            <div
              className="item-slick3"
              data-thumb="../uploads/1597605610098_3.jpg"
            >
              <div className="wrap-pic-w pos-relative">
                <img src="../uploads/1597605610098_3.jpg" alt="IMG-PRODUCT" />
                <a
                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                  href="../uploads/1597605610098_3.jpg"
                >
                  <i className="fa fa-expand" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sl;



{/* <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<script src="vendor/animsition/js/animsition.min.js"></script>
<script src="vendor/bootstrap/js/popper.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="vendor/select2/select2.min.js"></script>

<script src="vendor/slick/slick.min.js"></script>
<script src="js/slick-custom.js"></script>
<script src="vendor/parallax100/parallax100.js"></script>
<script src="vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>

<script src="vendor/isotope/isotope.pkgd.min.js"></script>

<script src="vendor/sweetalert/sweetalert.min.js"></script>

<script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script> */}
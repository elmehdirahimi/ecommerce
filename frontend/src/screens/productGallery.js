import React from "react";
import ScriptTag from "react-script-tag";

const ImageList = (props) => {
  const images = props.images;

  return (
    <div className="wrap-slick3-dots">
      <ul className="slick3-dots" role="tablist" style={{}}>
        {images.map((image) => (
          <li key={image} className="slick-active" role="presentation">
            <img src={`http://localhost:5000/${image}`} />
            <div className="slick3-dot-overlay" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ImageSlide1 = (props) => {
  const images = props.images;
  return (
    <div className="slick-track" style={{ opacity: 1, width: "1140px" }}>
      {/* map */}
      {images.map((image, index) =>
        index == 0 ? (
          <div
            className="item-slick3 slick-slide slick-current slick-active"
            data-thumb={`http://localhost:5000/${image}`}
            data-slick-index={0}
            aria-hidden="false"
            tabIndex={0}
            role="tabpanel"
            id="slick-slide10"
            aria-describedby="slick-slide-control10"
            style={{
              width: "380px",
              position: "relative",
              left: "0px",
              top: "0px",
              zIndex: 999,
              opacity: 1,
            }}
          >
            <div className="wrap-pic-w pos-relative">
              <img src={`http://localhost:5000/${image}`} alt="IMG-PRODUCT" />
              <a
                className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                href={`http://localhost:5000/${image}`}
                tabIndex={0}
              >
                <i className="fa fa-expand" />
              </a>
            </div>
          </div>
        ) : (
          <div
            className="item-slick3 slick-slide"
            data-thumb={`http://localhost:5000/${image}`}
            data-slick-index={index}
            aria-hidden="false"
            tabIndex={-1}
            role="tabpanel"
            id="slick-slide1${index}"
            aria-describedby="slick-slide-control1${index}"
            style={{
              width: "380px",
              position: "relative",
              left: "-380px",
              top: "0px",
              zIndex: 998,
              opacity: 0,
              transition: "opacity 500ms ease 0s",
            }}
          >
            <div className="wrap-pic-w pos-relative">
              <img src={`http://localhost:5000/${image}`} alt="IMG-PRODUCT" />
              <a
                className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                href={`http://localhost:5000/${image}`}
                tabIndex={-1}
              >
                <i className="fa fa-expand" />
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const ProductGallery1 = (props) => {
  const images = props.image;
  return (
    <div className="col-md-6 col-lg-7 p-b-30">
      <div className="p-l-25 p-r-30 p-lr-0-lg">
        <div className="wrap-slick3 flex-sb flex-w">
          {/* Image List */}
          {/* <ImageList images={props.image}></ImageList> */}
          <div className="wrap-slick3-arrows flex-sb-m flex-w">
            <button className="arrow-slick3 prev-slick3 slick-arrow" style={{}}>
              <i className="fa fa-angle-left" aria-hidden="true" />
            </button>
            <button className="arrow-slick3 next-slick3 slick-arrow" style={{}}>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </button>
          </div>
          <div className="slick3 gallery-lb slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{ opacity: 1, width: "1140px" }}
              >
                {/* image slide */}

                {/* map */}
                <div
                  className="item-slick3 slick-slide slick-current slick-active"
                  data-thumb={`http://localhost:5000/${images[0]}`}
                  data-slick-index={0}
                  aria-hidden="false"
                  tabIndex={0}
                  role="tabpanel"
                  id="slick-slide10"
                  aria-describedby="slick-slide-control10"
                  style={{
                    width: "380px",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    zIndex: 999,
                    opacity: 1,
                  }}
                >
                  <div className="wrap-pic-w pos-relative">
                    <img
                      src={`http://localhost:5000/${images[0]}`}
                      alt="IMG-PRODUCT"
                    />
                    <a
                      className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href={`http://localhost:5000/${images[0]}`}
                      tabIndex={0}
                    >
                      <i className="fa fa-expand" />
                    </a>
                  </div>
                </div>
                <div
                  className="item-slick3 slick-slide"
                  data-thumb="{`http://localhost:5000/${images[1]}`}"
                  data-slick-index={1}
                  aria-hidden="true"
                  tabIndex={-1}
                  role="tabpanel"
                  id="slick-slide11"
                  aria-describedby="slick-slide-control11"
                  style={{
                    width: "380px",
                    position: "relative",
                    left: "-380px",
                    top: "0px",
                    zIndex: 998,
                    opacity: 0,
                  }}
                >
                  <div className="wrap-pic-w pos-relative">
                    <img
                      src="{`http://localhost:5000/${images[1]}`}"
                      alt="IMG-PRODUCT"
                    />
                    <a
                      className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href="{`http://localhost:5000/${images[1]}`}"
                      tabIndex={-1}
                    >
                      <i className="fa fa-expand" />
                    </a>
                  </div>
                </div>
                <div
                  className="item-slick3 slick-slide"
                  data-thumb={`http://localhost:5000/${images[2]}`}
                  data-slick-index={2}
                  aria-hidden="true"
                  tabIndex={-1}
                  role="tabpanel"
                  id="slick-slide12"
                  aria-describedby="slick-slide-control12"
                  style={{
                    width: "380px",
                    position: "relative",
                    left: "-760px",
                    top: "0px",
                    zIndex: 998,
                    opacity: 0,
                    transition: "opacity 500ms ease 0s",
                  }}
                >
                  <div className="wrap-pic-w pos-relative">
                    <img
                      src={`http://localhost:5000/${images[2]}`}
                      alt="IMG-PRODUCT"
                    />
                    <a
                      className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href={`http://localhost:5000/${images[2]}`}
                      tabIndex={-1}
                    >
                      <i className="fa fa-expand" />
                    </a>
                  </div>
                </div>

                {/* <ImageSlide images={props.image}></ImageSlide> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageSlide = (props) => {
  const images = props.images;
  return (
    <div>
      {/* map */}
      {images.map((image, index) => (
        <div
          key={index}
          className="item-slick3"
          data-thumb={`http://localhost:5000/${image}`}
        >
          <div className="wrap-pic-w pos-relative">
            <img src={`http://localhost:5000/${image}`} alt="IMG-PRODUCT" />
            <a
              className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
              href={`http://localhost:5000/${image}`}
            >
              <i className="fa fa-expand" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductGallery = (props) => {
  const images = props.image;
  return (
    <div className="col-md-6 col-lg-7 p-b-30">
      <ScriptTag src="vendor/slick/slick.min.js"></ScriptTag>

      <ScriptTag src="js/slick-custom.js"></ScriptTag>

      <div className="p-l-25 p-r-30 p-lr-0-lg">
        <div className="wrap-slick3 flex-sb flex-w">
          <div className="wrap-slick3-dots" />
          <div className="wrap-slick3-arrows flex-sb-m flex-w" />
          <div className="slick3 gallery-lb">
            {images.map((image, index) => (
              <div className="item-slick3" data-thumb={image} key={index}>
                <div className="wrap-pic-w pos-relative">
                  <img src={image} alt="IMG-PRODUCT" />
                  <a
                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                    href={image}
                  >
                    <i className="fa fa-expand" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

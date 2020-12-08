import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import uploadProductAction from "../actions/uploadProductAction";

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function UploadProductScreen(props) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(1);

  const [image, setImages] = useState([]);

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const uploadProduct = useSelector((state) => state.uploadProduct);
  const { loading, productId, error } = uploadProduct;

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !image ||
      !name ||
      !brand ||
      !price ||
      !countInStock ||
      !description ||
      !category
    ) {
      return alert("fill all the fields first!");
    }

    dispatch(
        uploadProductAction({image, name, brand, category, price, description, countInStock})
    );

    // Axios.post("/api/product/uploadProduct", variables).then((response) => {
    //   if (response.data.success) {
    //     alert("Product Successfully Uploaded");
    //     props.history.push("/");
    //   } else {
    //     alert("Failed to upload Product");
    //   }
    // });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="col-sm-10 col-lg-7 col-xl-8 m-lr-auto m-b-50"
      style={{ "padding-top": "10%" }}
    >
      <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
        <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
        <div className="flex-w flex-t bor12 p-t-15 p-b-30">
          <div className="">
            <div className="p-t-15">
              {/* <FileUpload refreshFunction={(e) => setImage(e.target.value)} /> */}
              <FileUpload refreshFunction={updateImages} />
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                />
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl20 plh3 size-111 p-lr-15"
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="brand"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="number"
                  ame="price"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="price"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="category"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="category"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="number"
                  name="CountInStock"
                  id="CountInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                  placeholder="CountInStock"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <textarea
                  className="stext-111 cl8 plh3 size-111 p-lr-15 form-control"
                  type="text"
                  name="Description"
                  id="Description"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
        >
          Save and Upload product
        </button>
      </div>
    </form>

    // <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
    //   <br />
    //   <br />
    //   <div style={{ textAlign: "center", marginBottom: "2rem" }}>
    //     <div level={2}> Upload Travel Product</div>
    //   </div>

    //   <div onSubmit={onSubmit}>
    //     {/* DropZone */}
    //     <FileUpload refreshFunction={updateImages} />

    //     <br />
    //     <br />
    //     <label>Title</label>
    //     <input onChange={onTitleChange} value={TitleValue} />
    //     <br />
    //     <br />
    //     <label>Description</label>
    //     <textarea onChange={onDescriptionChange} value={DescriptionValue} />
    //     <br />
    //     <br />
    //     <label>Price($)</label>
    //     <input onChange={onPriceChange} value={PriceValue} type="number" />
    //     <br />
    //     <br />

    //     <select onChange={onContinentsSelectChange} value={ContinentValue}>
    //       {Continents.map((item) => (
    //         <option key={item.key} value={item.key}>
    //           {item.value}{" "}
    //         </option>
    //       ))}
    //     </select>
    //     <br />
    //     <br />

    //     <button onClick={onSubmit}>Submit</button>
    //   </div>
    // </div>
  );
}

export default UploadProductScreen;

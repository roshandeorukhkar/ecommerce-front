import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url, className }) => (
  <div className="product-img">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      // className="mb-3"
      // className="d-block w-100"
      className={className}
      // className="img-fluid"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  </div>
);

export default ShowImage;

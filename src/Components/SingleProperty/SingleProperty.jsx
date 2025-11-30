import { useState } from "react";
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./index.css";
import { fetchPropertyById } from "../../Store/propertyReducer/propertiesSlice";
import { useSelector,useDispatch } from "react-redux";

import Footer from "../Footer/Footer";
const images = [
    "https://res.cloudinary.com/ddeif6hmk/image/upload/v1714313062/photo-1600585154340-be6161a56a0c_vb23mh.jpg",
    "https://res.cloudinary.com/ddeif6hmk/image/upload/v1714744541/houseExample_bozghb.png",
    "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685005/safari_nmvqfd.webp"
];

const SingleProperty = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const property = useSelector((state) => state.properties.selectedProperty);
    const status = useSelector((state) => state.properties.status);
    const error = useSelector((state) => state.properties.error);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      dispatch(fetchPropertyById(id));
    }, [dispatch, id]);
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
  
    if (!property) {
      return <div>No property found.</div>;
    }
  
    const images = property.images || [];

    const shownImage = images[currentImageIndex].value || "https://via.placeholder.com/150";

  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

      const displayPrice =
    property.newPrice && property.newPrice !== ""
      ? Number(property.newPrice).toLocaleString("de-DE")
      : Number(property.price).toLocaleString("de-DE");

      console.log("property", property.kenyanRate);
  const usdPrice =
  property.newPrice && property.newPrice !== ""
    ? Number(property.newPrice)
    : Number(property.price);


const kesPrice = property.kenyanPrice? property.kenyanPrice : usdPrice * property.kenyanRate;

    return (
    <>   <div className="singlePropertyContainer">
        <div className="singlePropertyContent">
          <div className="singlePropertyImages">
            <img src={shownImage} alt="Property" />
            <div className="imageNav">
              <button onClick={prevImage}>&lt;</button>
              <button onClick={nextImage}>&gt;</button>
            </div>
          </div>
          <div className="propertyDetails">
            <h2>{property.name}</h2>
               <h3>
              Price: ${displayPrice}
              {property.newPrice && property.newPrice !== "" && (
                <span className="oldPrice">
                  {" "}
                  (Old: {Number(property.price).toLocaleString("de-DE")}$)
                </span>
              )}
            </h3>


<h3>Price in KES: {kesPrice.toLocaleString("en-KE")} KSh</h3>
            <h3>Location: {property.location}, {property.city}</h3>
            <p>Description:</p>
            <p>{property.description}</p>
            <div className="whatsAppDiv"> 
          <a 
                href="https://wa.me/+46722760948" 
                className="whatsapp-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
          </div>
          </div>


        </div>
      </div>
      
      <Footer/> </>
    );
  }
  
  export default SingleProperty;
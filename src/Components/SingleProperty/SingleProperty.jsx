import { useState } from "react";
import "./index.css";

const images = [
    "https://res.cloudinary.com/ddeif6hmk/image/upload/v1714313062/photo-1600585154340-be6161a56a0c_vb23mh.jpg",
    "https://res.cloudinary.com/ddeif6hmk/image/upload/v1714744541/houseExample_bozghb.png",
    "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685005/safari_nmvqfd.webp"
];

const SingleProperty = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const shownImage = images[currentImageIndex];

    const nextImage = () => {
       setCurrentImageIndex((prevIndex)=> (prevIndex + images.length+ 1) % images.length)
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    return (
        <div className="singlePropertyContainer">
            <div className="singlePropertyContent">
                <div className="singlePropertyImages">
                    <img src={shownImage} alt="Property" />
                    <div className="imageNav">
                        <button onClick={prevImage}>&lt;</button>
                        <button onClick={nextImage}>&gt;</button>
                    </div>
                </div>
                <div className="propertyDetails">
                    <h2>Four apartment and a room find out</h2>
                    <h3>Price: $35</h3>
                    <h3>Location: Nairobi, kenya </h3>
                    <p>Description:</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ratione aperiam illo aspernatur iusto, reprehenderit odio doloremque molestiae rem, veritatis dolores molestias ipsam eaque repellendus magni consequuntur suscipit quasi necessitatibus!</p>
                </div>
            </div>
        </div>
    );
}

export default SingleProperty;

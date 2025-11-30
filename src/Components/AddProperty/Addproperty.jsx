import React, { useState, useEffect } from "react";
import "./index.css";
import { AddNewService, db } from "../../Firebase/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProperties } from "../../Store/propertyReducer/propertiesSlice";
import { useDispatch } from "react-redux";
import { setProperties } from "../../Store/propertyReducer/propertiesSlice";

const AddProperty = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const properties = useSelector((state) => state.properties.properties);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
    type: "",
    kenyanRate:"",
    kenyanPrice: "",
    images: [],
    city: "",
    discount: "",
    newPrice: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const fetchPropertyData = async () => {
        try {
          const docRef = doc(db, "Properties", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFormData({
              ...data,
              discount: data.discount || "",
              newPrice: data.newPrice || "",
              kenyanRate: data.kenyanRate || 125.0,
              kenyanPrice: data.kenyanPrice || "",
            });
          }
        } catch (error) {
          console.error("Error fetching property data: ", error);
        }
      };

      fetchPropertyData();
    }
  }, [id]);

  const handleInputChange = (name, value) => {
let raw = value;

  // For price: remove thousand separators (dots), keep numbers clean
  if (name === "price") {
    raw = value.replace(/\./g, "").replace(/,/g, ".");
  }

  // For discount: allow decimals like 9.09
  if (name === "discount") {
    raw = value.replace(/,/g, "."); // only convert comma to dot
  }

  let updatedForm = { ...formData, [name]: raw };

  if (name === "price" || name === "discount") {
    const price = name === "price" ? raw : formData.price;
    const discount = name === "discount" ? raw : formData.discount;

    if (price && discount) {
      const numericPrice = parseFloat(price);
      const numericDiscount = parseFloat(discount);

      updatedForm.newPrice = (
        numericPrice * (1 - numericDiscount / 100)
      ).toFixed(0); // no decimals for house price
    } else {
      updatedForm.newPrice = "";
    }
  }
    setFormData(updatedForm);
  };

  const handleAddLista = () => {
    setFormData({
      ...formData,
      images: [...formData.images, { id: formData.images.length, value: "" }],
    });
  };

  const handleListaChange = (id, value) => {
    const updatedListor = formData.images.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setFormData({
      ...formData,
      images: updatedListor,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser && currentUser.Admin === "true") {
      try {
        if (id) {
          const docRef = doc(db, "Properties", id);
          await updateDoc(docRef, formData);
        } else {
          await AddNewService(formData);
        }

        navigate("/manage-properties");
        window.location.reload();
      } catch (error) {
        console.error("Error submitting form: ", error);
      }
    }
  };

  return (
    <div className="form-container">
      <form className="service-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label>Price</label>
        <br />
        <input
          id="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />
        <label>Kenyan Conversion Rate</label>
        <br />
        <input
          id="kenyanRate"
          type="number"
          name="kenyanRate"
          value={formData.kenyanRate}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label>Kenyan Shilling Price</label>
        <br />
        <input
          id="kenyanPrice"
          type="number"
          name="kenyanPrice"
          value={formData.kenyanPrice}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label>Discount (%)</label>
        <br />
          <input
            id="discount"
            type="text"
            inputMode="decimal"
            pattern="^\d*\.?\d*$"
            name="discount"
            value={formData.discount}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        <br />
  
        <label>New Price (after discount)</label>
        <br />
        <input
          id="newPrice"
          type="number"
          name="newPrice"
          value={formData.newPrice}
          readOnly
        />
        <br />

        <label>Location</label>
        <br />
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label>City</label>
        <br />
        <input
          id="city"
          name="city"
          value={formData.city}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label>Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label>Type</label>
        <div>
          <input
            type="radio"
            id="rent"
            name="type"
            value="rent"
            checked={formData.type === "rent"}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <label htmlFor="rent">Rent</label>

          <input
            type="radio"
            id="land"
            name="type"
            value="land"
            checked={formData.type === "land"}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <label htmlFor="land">Land</label>

          <input
            type="radio"
            id="houses"
            name="type"
            value="houses"
            checked={formData.type === "houses"}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />

          <input
            type="radio"
            id="hotel"
            name="type"
            value="hotel"
            checked={formData.type === "hotel"}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <label htmlFor="hotel">hotel</label>
        </div>

        <label>Images</label>
        <br />
        {formData.images.map((item) => (
          <div key={item.id}>
            <textarea
              value={item.value}
              onChange={(e) => handleListaChange(item.id, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddLista} className="btnLists">
          Add List Item
        </button>
        <br />
        <button className="addService" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
import React, { useState, useEffect } from "react";
import "./index.css";
import { AddNewService,db } from "../../Firebase/firebase";
import { getDoc,doc,updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AddProperty = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
    type: "",
    images: [],
    city: "",
  });
  const navigate = useNavigate();
  const { id } = useParams(); 

  console.log()
  useEffect(() => {
    if (id) {
    
      const fetchPropertyData = async () => {
        try {
          const docRef = doc(db, "Properties", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setFormData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching property data: ", error);
        }
      };

      fetchPropertyData();
    }
  }, [id]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
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
    if (currentUser && currentUser.Admin === 'true') {
      try {
        if (id) {

          const docRef = doc(db, "Properties", id);
          await updateDoc(docRef, formData);
          console.log("Updated property with ID: ", id);
        } else {
          await AddNewService(formData);
          console.log("Added new property with data: ", formData);
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
        <input
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

          <textarea
            type="radio"
            id="houses"
            name="type"
            value="houses"
            checked={formData.type === "houses"}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <label htmlFor="houses">Houses</label>
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
        <button className="addService" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProperty;

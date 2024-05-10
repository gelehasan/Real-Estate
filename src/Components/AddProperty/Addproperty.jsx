import React, { useState } from "react";
import "./index.css";
import { AddNewService } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddProperty = () => {
  const currentUser = useSelector((state)=> state.user.currentUser)

  const [formData, setFormData] = useState({
    name: "",
    price:"",
    location:"",
    Description: "",
    type:"",
    images: [],
    city:"",
    publishedDate:""
    
  });
  const Navigate = useNavigate();
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

  const handleAddOtherList = () => {
    setFormData({
      ...formData,
      otherList: [...formData.otherList, { id: formData.otherList.length, value: "" }],
    });
  };

  const handleListaChange = (id, value) => {
    const updatedListor = formData.listor.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setFormData({
      ...formData,
      listor: updatedListor,
    });
  };

  const handleOtherListChange = (id, value) => {
    const updatedOtherList = formData.otherList.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setFormData({
      ...formData,
      otherList: updatedOtherList,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitted with ", formData)
    if(currentUser && currentUser.Admin==true){
      try {
      {/*  await  AddNewService(formData)
        Navigate("/DashboardLinks")
      window.location.reload();*/}
      console.log("Submitted with ", formData)
      } catch (error) {
        
      }
    }
  };


  return (
    <div className="form-container">
      <form className="service-form" onSubmit={handleSubmit}>
        <label> Title</label> <br />
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label> Price</label> <br />
        <input
          id="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />
        <label> Location</label> <br />
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />
        <label> City</label> <br />
        <input
          id="city"
          name="city"
          value={formData.city}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
        <br />

        <label> Description</label> <br />
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
            onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          />
          <label htmlFor="rent">Rent</label>

          <input
            type="radio"
            id="land"
            name="type"
            value="land"
            checked={formData.type === "land"}
            onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          />
          <label htmlFor="land">Land</label>

          <input
            type="radio"
            id="houses"
            name="type"
            value="houses"
            checked={formData.type === "houses"}
            onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          />
          <label htmlFor="houses">Houses</label>
        </div>
        <label>Images</label> <br />
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

<br />

        <button className="addService" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProperty;
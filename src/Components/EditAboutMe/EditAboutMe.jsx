import React, { useState, useEffect } from "react";
import "./EditAboutMe.css";
import { db } from "../../Firebase/firebase";
import { getDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditAboutMe = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({
    paragraphs: [""],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        const docRef = doc(db, "AboutMe", "aboutMeData");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching about me data: ", error);
      }
    };

    fetchAboutMeData();
  }, []);

  const handleInputChange = (index, value) => {
    const updatedParagraphs = [...formData.paragraphs];
    updatedParagraphs[index] = value;
    setFormData({
      ...formData,
      paragraphs: updatedParagraphs,
    });
  };

  const handleAddParagraph = () => {
    setFormData({
      ...formData,
      paragraphs: [...formData.paragraphs, ""],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser && currentUser.Admin === 'true') {
      try {
        const docRef = doc(db, "AboutMe", "aboutMeData");
        await setDoc(docRef, formData);
        console.log("About me data updated");
        navigate("/admin-dashboard");
      } catch (error) {
        console.error("Error updating about me data: ", error);
      }
    }
  };

  return (
    <div className="form-container">
      <form className="about-me-form" onSubmit={handleSubmit}>
        <h1>Edit About Me</h1>
        {formData.paragraphs.map((paragraph, index) => (
          <div key={index}>
            <textarea
              value={paragraph}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddParagraph} className="btn-add-paragraph">
          Add Paragraph
        </button>
        <br />
        <button className="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditAboutMe;

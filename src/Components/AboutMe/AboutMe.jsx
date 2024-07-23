import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import { db } from "../../Firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import Footer from "../Footer/Footer";
const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState({ paragraphs: [] });

  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        const docRef = doc(db, "AboutMe", "aboutMeData");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAboutMeData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching about me data: ", error);
      }
    };

    fetchAboutMeData();
  }, []);

  return (
   <><div className="aboutMeContainer">
      <div className="aboutMeContent">
        <h1>About Me</h1>
        {aboutMeData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default AboutMe;

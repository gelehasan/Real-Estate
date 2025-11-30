import "./index.css";
import PropertyCard from "../PropertyCard/PropertCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../Store/propertyReducer/propertiesSlice";

const PropertyShowcase = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const status = useSelector((state) => state.properties.status);
  const error = useSelector((state) => state.properties.error);
  const [randomProperties, setRandomProperties] = useState([]);

  // 👉 Always fetch if list is empty
  useEffect(() => {
    if (properties.length === 0) {
      dispatch(fetchProperties());
    }
  }, [dispatch, properties.length]);

  useEffect(() => {
    if (properties.length > 0) {
      const selectedProperties = [];
      const usedIndices = new Set();

      while (
        selectedProperties.length < 3 &&
        selectedProperties.length < properties.length
      ) {
        const randomIndex = Math.floor(Math.random() * properties.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          selectedProperties.push(properties[randomIndex]);
        }
      }

      setRandomProperties(selectedProperties);
    }
  }, [properties]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="propertyContainer">
      <div className="propertyContent">
        <div className="propertyInfomation">
          <div>
            <h1>Current Properties</h1>
            <p>Find the property that suits you at affordable price</p>
          </div>
          <div className="propertyInfoViewAll">
            <Link to={"/properties"} className="LinkProperties">
              <span>View All</span>
            </Link>
          </div>
        </div>

        <div className="property-list">
          {randomProperties.map((property) => (
            <Link
              to={`properties/${property.id}`}
              className="LinkProperties"
              key={property.id}
            >
              <PropertyCard
                image={property.images?.[0]?.value || "default_image_url_here"}
                title={property.name}
                location={`${property.location}, ${property.city}`}
                price={`$${property.price}`}
                id={property.id}   // ✅ FIXED
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;

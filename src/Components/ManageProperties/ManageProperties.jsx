import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProperties,deleteProperty } from '../../Store/propertyReducer/propertiesSlice';
import './DashboardLinks.css';

const ManageProperties = () => {
  const dispatch = useDispatch();
 const properties = useSelector((state) => state.properties.properties);
  const status = useSelector((state) => state.properties.status);
  
  console.log(properties)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProperties());
    }
  }, [status, dispatch]);

  const handleDelete = (propertyId) => {
    dispatch(deleteProperty(propertyId));
  };
  if(!properties) return 
  
  console.log( properties)

  return (
    <div className="dashboard-container">
      <h1>Manage Properties</h1>
      <div className="dashboard-links">
        <Link to="/AddService" className="Nav-link">Add Service</Link>
      </div>

      {properties.map((item) => (
        <div className="AvaiableServices" key={item.id}>
          <div><h4>{item.id}</h4></div>
          <div className="serviceCrud">
            <Link to={`/UpdateService/${item.id}`}><button>Update</button></Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default ManageProperties;

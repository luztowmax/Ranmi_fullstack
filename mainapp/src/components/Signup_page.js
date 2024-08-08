import React, { useState } from 'react';
import '../styles/SignUp.css';

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    surname: '',
    otherName: '',
    email: '',
    telephone: '',
    address: '',
    bikeNumber: '',
    identification: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="signup-overlay">
      <div className="signup-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="otherName">Other Name</label>
            <input
              type="text"
              id="otherName"
              name="otherName"
              value={formData.otherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bikeNumber">Bike Number</label>
            <input
              type="text"
              id="bikeNumber"
              name="bikeNumber"
              value={formData.bikeNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="identification">Means of Identification</label>
            <input
              type="text"
              id="identification"
              name="identification"
              value={formData.identification}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

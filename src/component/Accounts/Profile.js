import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function ProfilePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (name === "" || phone === "" || email === "") {
      alert("Please fill in all the details.");
    } else {
      fetch("http://localhost/saveProfile.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, address }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Profile updated successfully.");
            window.location.href = "./Cart";
          } else {
            alert("Failed to save data.");
          }
        });
    }
  };

  return (
    <div className="profile-container">
      <div className="pagehead">
        <h3 className="title">Update Profile</h3>
      </div>

      <div className="profile">
        <form onSubmit={handleSave}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </label>
          <br />

          <label>
            Mobile Number
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </label>
          <br />

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <br />

          <label>
            Address
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
          </label>
          <br />

          <div className="button-container">
            <Link  className="back" to="/">
              <button type="button">Back</button>
            </Link>
            <button type="submit" className="save-button">SAVE</button>
          </div>
        </form>
      </div>

      <div className="fourthdiv">
        <div className="rights">
          <p>&#169; 2024 Arogya-Care. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

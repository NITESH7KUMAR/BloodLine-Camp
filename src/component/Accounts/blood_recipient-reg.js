import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blood_recipient-reg.css";

function BloodRecipient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [reasonForRequest, setReasonForRequest] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [urgency, setUrgency] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !bloodGroup || !dob || !gender || !address || !reasonForRequest || !emergencyContact) {
      alert("Please fill in all the details.");
    } else {
      fetch("http://localhost/seProfile.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          bloodGroup,
          dob,
          gender,
          reasonForRequest,
          emergencyContact,
          urgency,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Thank you for registering your blood request.");
          } else {
            alert("Failed to save data.");
          }
        });
    }
  };

  return (
    <div className="rec-page">
      <div className="rec-container">
        <div className="rechead">
          <h3 className="title2">Blood Request Registration</h3>
        </div>
        <div className="rec">
          <form onSubmit={handleSave}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
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
              Blood Group
              <input
                type="text"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                placeholder="Blood Group (e.g., A+, B-, O+)"
                required
              />
            </label>
            <br />

            <label>
              Date of Birth
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Gender
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
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

            <label>
              Reason for Requesting Blood
              <input
                type="text"
                value={reasonForRequest}
                onChange={(e) => setReasonForRequest(e.target.value)}
                placeholder="Reason for Request (e.g., Surgery, Accident, etc.)"
                required
              />
            </label>
            <br />

            <label>
              Emergency Contact
              <input
                type="text"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                placeholder="Emergency Contact Name and Phone"
                required
              />
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                checked={urgency}
                onChange={(e) => setUrgency(e.target.checked)}
                required
              />
              Urgent Request (Tick if this is an emergency)
            </label>
            <br />

            <div className="button-container2">
              <Link className="back2" to="/">
                <button type="button">Back</button>
              </Link>
              <button type="submit" className="save-button2">Request</button>
            </div>
          </form>
        </div>

        <div className="fourthdiv2">
          <div className="rights2">
            <p>&#169; 2024 Arogya-Care. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodRecipient;

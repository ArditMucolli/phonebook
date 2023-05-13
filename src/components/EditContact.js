import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector(state => state);
  const currentContact = contacts.find(contact => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setLastName(currentContact.lastName);
      setAddress(currentContact.address);
      setCity(currentContact.city);
      setCountry(currentContact.country);
      setEmail(currentContact.email);
      setPhoneNumber(currentContact.phoneNumber);
    }
  }, [currentContact]);

  const handleSubmit = e => {
    e.preventDefault();

    const checkEmail = contacts.find(
      contact => contact.id !== parseInt(id) && contact.email === email
    );

    const checkPhoneNumber = contacts.find(
      contact =>
        contact.id !== parseInt(id) &&
        contact.phoneNumber === parseInt(phoneNumber)
    );

    if (
      !name ||
      !lastName ||
      !address ||
      !city ||
      !country ||
      !email ||
      !phoneNumber
    ) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already Exists!");
    }

    if (checkPhoneNumber) {
      return toast.error("This phone number already Exists!");
    }

    const data = {
      id: parseInt(id),
      name,
      lastName,
      address,
      city,
      country,
      email,
      phoneNumber,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully!");
    navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <div className="row">
            <h1 className="text-center my-4">Edit Contact {name}</h1>
            <div className="col-md-6 mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group ">
                  <span>Name:</span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control my-1"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <span>Last Name:</span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control my-1"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <span>Address:</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control my-1"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <span>City:</span>
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control my-1"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <span>Country:</span>
                  <input
                    type="text"
                    placeholder="Country"
                    className="form-control my-1"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <span>Email:</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control my-1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <span>Phone Number:</span>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control my-1"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center my-4">This Contact does not exists</h1>
      )}
    </div>
  );
};

export default EditContact;

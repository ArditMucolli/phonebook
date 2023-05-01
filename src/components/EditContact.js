import React from "react";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-4">Edit Contact {id}</h1>
        <div className="col-md-6 mx-auto p-5">
          <form>
            <div className="form-group ">
              <span>Name:</span>
              <input
                type="text"
                placeholder="Name"
                className="form-control my-1"
              />
            </div>
            <div className="form-group my-3">
              <span>Last Name:</span>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control my-1"
              />
            </div>
            <div className="form-group my-3">
              <span>Address:</span>
              <input
                type="text"
                placeholder="Address"
                className="form-control my-1"
              />
            </div>
            <div className="form-group my-3">
              <span>City:</span>
              <input
                type="text"
                placeholder="City"
                className="form-control my-1"
              />
            </div>
            <div className="form-group my-3">
              <span>Country:</span>
              <input
                type="text"
                placeholder="Country"
                className="form-control my-1"
              />
            </div>
            <div className="form-group my-3">
              <span>Email:</span>
              <input
                type="email"
                placeholder="Email"
                className="form-control my-1"
              />
            </div>
            <div className="form-group my-3">
              <span>Phone Number:</span>
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control my-1"
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Save" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;

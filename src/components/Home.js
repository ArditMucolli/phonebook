import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted sucessfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
          <Link to="/add" className="btn btn-primary">
            Add Contact
          </Link>
        </div>
        <div className="col-md-12 mx-auto">
          <h1 className="mb-5">Contacts</h1>
          <table className="table table-bordered table-striped">
            <thead className=" text-center">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">Address</th>
                <th scope="col">city</th>
                <th scope="col">country</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{contact.name}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.address}</td>
                  <td>{contact.city}</td>
                  <td>{contact.country}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-success"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { toast } from "react-toastify";

const Registration = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let registerdUser = {userName, password, fullname, email, phone, country, address, gender};
        console.log(registerdUser);

        fetch('http://localhost:8000/user', {
            method: "POST",
            headers: {"content-type": 'application/json'},
            body: JSON.stringify(registerdUser)
        }).then((res) => {
            toast.success('Registered Successfully');
        }).catch((err) => {
            toast.error('Falied: ', err);
        })
    }

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h1>Registration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Username <span>*</span></label>
                  <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Password <span>*</span></label>
                  <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Fullname <span>*</span></label>
                  <input className="form-control" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Email <span>*</span></label>
                  <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Phone <span>*</span></label>
                  <input className="form-control" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Country <span>*</span></label>
                  <select className="form-control" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="india">India</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Address <span>*</span></label>
                  <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Gender <span>*</span></label>
                  <input className="gender-check" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} name='gender' type="radio" value='male' required/>
                  <label>Male</label>
                  <input className="gender-check" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} name='gender' type="radio" value='female' required/>
                  <label>Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <a className="btn btn-danger" href="#0">Back</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;

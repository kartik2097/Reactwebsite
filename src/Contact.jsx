import React, { useState } from "react";

const Contact = () => {

  const [data,setData] = useState({
    fullname : '',
    phone : '',
    email : '',
    msg : ''
  });

  const InputEvent = (event) => {
    const {name , value} = event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name] : value
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.
      My mobile number is ${data.phone}.
      My email id is ${data.email}.
      My message : ${data.msg}
      `
    )
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center contact_header">Contact Us</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label  className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

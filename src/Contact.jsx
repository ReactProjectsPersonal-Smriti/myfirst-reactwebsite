import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const handleEvent = (e) => {
        const { name, value } = e.target;

        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My fullname is ${data.fullname}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" name="fullname" value={data.fullname} onChange={handleEvent} placeholder="name" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="number" name="phone" value={data.phone} onChange={handleEvent} placeholder="mobile number" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={handleEvent} placeholder="name@email.com" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea name="msg" value={data.msg} onChange={handleEvent} rows="5" class="form-control" />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
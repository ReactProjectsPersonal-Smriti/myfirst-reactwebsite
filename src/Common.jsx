import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>{props.header}<strong className="brand-name"> SmriCodes</strong></h1>
                                    <h2 className="my-3">We are a team of talented developers making websites</h2>
                                    <div className="mt-3">
                                        <NavLink className="btn-get-started" to={props.visit}>{props.buttonName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.img} className="img-fluid animated" alt="home page header" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;
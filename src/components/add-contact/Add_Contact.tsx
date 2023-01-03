import React from 'react'
import "./add_contact.css"

const Add_Contact = () => {
    return (
        <div>
            <div className="container mt-3">
                <div className="row mt-2">
                    <div className="col-12 col-sm-7 col-md-5 col-xl-4">
                        <div className='border border-dark rounded-3 d-flex align-items-center'>
                            <i className='fa fa-search ms-2'></i>
                            <input type="text"
                                placeholder='Search contact name'
                                className='form-control search border-0' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <img src="https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/321792690_5779126398847674_1197687211712311561_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEcQlwUXLog-lpCwIilIIlzgCbWg-iNrkKAJtaD6I2uQroSWJOiAMpoozgqDNwQc55rexqH7189ysmNduGfhfsV&_nc_ohc=fLowoOqimeQAX8a_mfY&_nc_ht=scontent.fmnl25-5.fna&oh=00_AfDIdHxrwGJ0-Ioj92UeXMTAoABEaZ08Pwlh9ZvW_B6DLw&oe=63B8610B"
                                            alt=""
                                            className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-lg-6 mt-2 mt-lg-0">
                                        <ul className='list-group'>
                                            <li className="list-group-item">
                                                Name:
                                            </li>
                                            <li className="list-group-item">
                                                Email:
                                            </li>
                                            <li className="list-group-item">
                                                Address:
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mt-2 mt-lg-0 col-lg-1 ps-lg-0'>
                                        <button className="col-4 btn btn-primary w-lg-100">
                                            <i className="fa fa-eye"></i>
                                        </button>
                                        <button className="col-4 btn btn-success w-lg-100">
                                            <i className="fa fa-pen"></i>
                                        </button>
                                        <button className="col-4 btn btn-danger w-lg-100">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <img src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.6435-9/78950920_139722624113707_5205046595162210304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeESE0cQZOdb2tP5ZpJ85Z265EhjCfkCKG7kSGMJ-QIobu0Ho29Ehp3GxqDOtb-VThVcUtVNHyl8iut0ShXZ6Pf0&_nc_ohc=U2NwRb-XBp8AX_ohHsb&tn=PgEOBAdVRiZgWTuo&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfCy3lDbeUDII6ntbVsilhQY2hy0jX0dM-2U4GMuecC5qA&oe=63DB5519
                                        "
                                            alt=""
                                            className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-lg-6 mt-2 mt-lg-0">
                                        <ul className='list-group'>
                                            <li className="list-group-item">
                                                Name:
                                            </li>
                                            <li className="list-group-item">
                                                Email:
                                            </li>
                                            <li className="list-group-item">
                                                Address:
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mt-2 mt-lg-0 col-lg-1 ps-lg-0'>
                                        <button className="col-4 btn btn-primary w-100">
                                            <i className="fa fa-eye"></i>
                                        </button>
                                        <button className="col-4 btn btn-success w-100">
                                            <i className="fa fa-pen"></i>
                                        </button>
                                        <button className="col-4 btn btn-danger w-100">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Add_Contact
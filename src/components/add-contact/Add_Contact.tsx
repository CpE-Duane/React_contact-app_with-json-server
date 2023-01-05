import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ContactService from '../../service/Contact_Service'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar'
import Loading_Screen from '../loading-screen/Loading_Screen'
import Schema from '../../Schema/schema'
import Toast from '../../Toast_Msg/toast_msg'

type AddContactForm = {
    name: string,
    email: string,
    address: string,
    company: string,
    contactNo: number,
    age: number,
    img: string
}


const Add_Contact = () => {

    let [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const schema = Schema

    const { register, handleSubmit, formState: { errors } } = useForm<AddContactForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: any) => {
        try {
            setLoading(true)
            await ContactService.addContact(data)
            Toast.successMsg("Contact added successfully.")
            setLoading(false)
            navigate('/')

        } catch (error: any) {
            Toast.errorMsg(error)
        }
        setLoading(false)
    }



    return (
        <div>
            {
                loading ? <Loading_Screen /> :
                    <div>
                        <Navbar />
                        <div className="container mt-3 ">
                            <h3 className='fw-bold'>Add Contact</h3>
                            <p className='fst-italic d-none d-sm-block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit ipsam numquam repellendus officia sed. Fuga, incidunt sapiente maiores corporis odit aspernatur corrupti eaque excepturi quae quasi atque delectus impedit!</p>
                        </div>

                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* name */}
                                        <div className='mb-2 fw-bold text-secondary'>
                                            Name
                                            <input type="text"
                                                placeholder='Enter name'
                                                className={`form-control ${errors.name && 'is-invalid'}`}
                                                {...register("name")} />
                                            <span className="invalid-feedback">{errors.name?.message}</span>
                                        </div>
                                        {/* img url */}
                                        <div className='mb-2 fw-bold text-secondary'>
                                            Image URL
                                            <input type="text"
                                                placeholder='Enter your image url'
                                                className={`form-control ${errors.img && 'is-invalid'}`}
                                                {...register("img")} />
                                            <span className="invalid-feedback">{errors.img?.message}</span>
                                        </div>
                                        {/* email */}
                                        <div className='mb-2 fw-bold text-secondary'>
                                            Email
                                            <input type="email"
                                                placeholder='Enter email'
                                                className={`form-control ${errors.email && 'is-invalid'}`}
                                                {...register("email")} />
                                            <span className="invalid-feedback">{errors.email?.message}</span>
                                        </div>
                                        {/* address */}
                                        <div className="mb-2 fw-bold text-secondary">
                                            Address
                                            <input type="text"
                                                placeholder='Enter address'
                                                className={`form-control ${errors.address && 'is-invalid'}`}
                                                {...register("address")} />
                                            <span className="invalid-feedback">{errors.address?.message}</span>
                                        </div>
                                        {/* age */}
                                        <div className="mb-2 fw-bold text-secondary">
                                            Age
                                            <input type="number"
                                                placeholder='Enter age'
                                                className={`form-control ${errors.age && 'is-invalid'}`}
                                                {...register("age")} />
                                            <span className="invalid-feedback">{errors.age?.message}</span>
                                        </div>
                                        {/* company */}
                                        <div className="mb-2 fw-bold text-secondary">
                                            Company
                                            <input type="text"
                                                placeholder='Enter company name'
                                                className={`form-control ${errors.company && 'is-invalid'}`}
                                                {...register("company")} />
                                            <span className="invalid-feedback">{errors.company?.message}</span>
                                        </div>
                                        {/* contact */}
                                        <div className="mb-3 fw-bold text-secondary">
                                            Contact No
                                            <input type="number"
                                                placeholder='Enter contact no.'
                                                className={`form-control ${errors.contactNo && 'is-invalid'}`}
                                                {...register("contactNo")} />
                                            <span className="invalid-feedback">{errors.contactNo?.message}</span>
                                        </div>

                                        <div className="row">
                                            <div className="col-6 d-grid">
                                                <Link to="/" className="btn btn-dark">
                                                    <i className="fas fa-caret-left"></i> Cancel
                                                </Link>
                                            </div>
                                            <div className="col-6 d-grid">
                                                <button type='submit' className="btn btn-success">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Add_Contact
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ContactService from '../../service/Contact_Service'
import './update_contact.css'
import Navbar from '../navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';
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

const Update_Contact = () => {

    const navigate = useNavigate()
    let [loading, setLoading] = useState(false)
    const schema = Schema

    let [contact, setContact] = useState({
            name: '',
            age: '',
            address: '',  
            company: '',
            contactNo: '',
            email: '',    
            img: ''
    })

    const { register, handleSubmit, formState: { errors } } = useForm<AddContactForm>({
        resolver: yupResolver(schema),
    })

    let { contactId } = useParams()

    useEffect(() => {
        getContact()
    }, [contactId])

    let getContact = async () => {
        try {
            setLoading(true)
            let response = await ContactService.getContact(contactId)
            setContact({
                name: response.data.name,
                address: response.data.name,
                age: response.data.age,
                company: response.data.company,
                email: response.data.email,
                contactNo: response.data.contactNo,
                img: response.data.img,
            })
            
            setLoading(false)

        } catch (error) {
            Toast.errorMsg(error)
        }
    }

    const onSubmit = async (data: any, e: any) => {
        try {
            setLoading(true)
            await ContactService.updateContact(contactId, data)
            Toast.successMsg("Contact updated successfully.")
            setLoading(false)
            navigate("/")
        } catch (error) {
            Toast.errorMsg(error)
        }
    }


    return (
        <div>
            <pre>{JSON.stringify(contact)}</pre>
            {
                loading ? <Loading_Screen /> :
                    <div>
                        <Navbar />
                        <div className="container mt-3">
                            <h3 className='fw-bold'>Update Contact</h3>
                            <p className='fst-italic d-none d-sm-block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit ipsam numquam repellendus officia sed. Fuga, incidunt sapiente maiores corporis odit aspernatur corrupti eaque excepturi quae quasi atque delectus impedit!</p>
                        </div>

                        <div className="container mt-3">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-lg-5 col-xl-4">
                                    <img src={/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(contact.img) ? contact.img : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRUSFRgVGBUWHRgYEhIYGRUYGBgZGRgZGBwcIS4lHB4rHxoYJjgmKy8xNTU1GiU7QDszPy40NT8BDAwMEA8QHhISHjQkJCs0MTE0MTQ0NDQ2NDQ0NDQ/NDQ0NDQ0MTQ3NDY0NDQ0MTQxMTQ0NDg0ND00MTQ0NDQ0P//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xABDEAACAQICBQkGBQEHAwUAAAABAgADEQQhBRIxQXEGEyJRYYGRobEHMkJScsEUYpLR8OEjQ4KissLxo9LiFRYzg5P/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAnEQEAAgEEAgEDBQEAAAAAAAAAAQIRAwQSITFRYRNBcSIyQoGhFP/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQKRPD1AoJYgAZkkgADrJM0rlF7QaNK1PC6uLrNsFNg1Ne1nXI8B3kSJmI8piszOIbxI1fH0k9+pTT6nVfUzkWIbHYrPFYt0U/3VA6igdRI29+txlujyYwS7UZj1tUf7ECUnU9Q7Roe5ddpaWw7e7XoN9NVD6GTNacafkzgm/urcKlT95YXk8aXSwmJxFA7bB2Ck9upbzvH1Pg+h8u2iJx3DcttJYRguIVMSnWQEcj8rILHvUmb/AMmuV+GxotTYrUAuaT2WoOsgbGHaL9tpaLRKltO1WyRESzmREQEREBERAREQEREBERAREQEREBERApMdpvS1PC0Xr1TZUF8tpJyCqN5JymRnIfalpXnMbTw1+hh1FVx81Rx0QeC6v6zK2nEZWpXlbCBpTF1scecxbMlMm6YZGIVV3Gp8z/zLZMKXWlVJRAgGVhvFs7ky7/6iLM7E6vuixzc7dUdQ6zwmExGNUtcADsUbP3nCZy3RGOm3pjLgEHI7J7GL7Zq2A0jqbRrI21fuOozMIgca1Jtcb12MvESDDJjFyLi1LnWV3U9Ws1vLZIGub23jdvHdtlPxEZMPVTF1UGq/TU7m6QPA7QZjKuTB6bMjoQyurWZWGzMesyX4jrkLEURtTw/aMpdh9n/Kj8dQIewr0SEqAWF7+64G4Gx7wd1pt0+f+QelTh9I0WvZK55h+o69gh7n1M+q8+gJopOYYtWvG3SsREs5kREBERAREQEREBERAREQEREBERApPnTlpXLaSxZ387q9yKqj/SJ9Fz505aDU0ljD1OWHFlU/ec9Tw7aH7kHReBfEvqXKonvN1XOwdpznQNF8ntUatNFXLquzdpO3xlrkbooU6CFh0m6Z+pgDnwFh3To+iMOES5HSbM8Nw+/fMsRN7Y+zde/065x24pprkw6sXoix2tT2d6bu7w6pr6VCjbWpuu43UjvndtJaLUkgjL4WG0Dqmt6U5NK46aLUG42s44WzHcYzNep7P037r05y+kaxFnCv1EqCRwZbGWxpGoMiAw6mW/ntmx4jkYgPQqVKZ6mAYD0PnI3/ALSrbsQh40yPuZPOvs4T6YU6Rf4V1ezpEeBvLTaQe/w37Bbymy4fkaSf7TEOw6kQL5kn0mQxHJHDFCqoyNbJ9ZyQes3OY7Im9U8J9NCrYkhg65MjBx2MpuD4ifUOFrB0VxsdVYcGAI9Z8v4ukyhlYWdGKN3ZXn0dyRqFsDhWO/D0D/01mjSY9x9pZmIidWYiIgIiICIiAiIgIiICIiAiIgIiIFJ89e0CjfS+IT56mHH6qdP959BubAmcl03oxcQ64g251aiOW3lQwOqewLs6rCcda0VjDTtqTaZlsOApWRR2Dzm1BprtAWt2WmaFScdLqHfWjMwkOQRY5yK+H6p615XXnScS51iY8Ilah1i/ESDUwqfKvgJmdaR69IEZZH1nO1HWt5+7DNTA2ADukWoJPqiQ6s4y0VlyrlgoXFVbfGEbv1QPsZ33klTK4DCqdow9Af8ATWcxfQCVsW9WqAyKqgKdhI1iSev/AJ7J07kxWLUFBz1CyA9g93yIHdNOjaJnHwx7mkxGflmYiJpYiIiAiIgIiICIiAiIgIiICIiAiIgeCJz+nhSpdT8JZTxU2E6FNc0zhCjtUVSyuLMALlWAsHt1EWB4XnDWpyjPpp21+Npj2x1IzIUny4TFUXuLiTKbzNWWy1UvWldeRtaNadOSnFJ1415G14apaRyOKPiT0jxkCqZJqvIbG5nK0u1YKdG4btzM2vkxR1cOp+Ys/cxNvK0wOj6BrA01DWY2Z7WVVG0A72OYt23m6U0CgACwAAA6gMgJo0KfyZN3qfxXIiJqYiIiAiIgIiICIiAiIgIiICIiAiIgJQysQNGxlLm6zru1tZfpbpDwNx3T0jzJ8qsL7tYfD0W+ljke4+swK1J5+pHG0vU0rc6RLILUldaQ1qSvOSvJfiks8tO8stUlp3ibJir07yyzWBbqH/AntVvJujMJzlZV2hLVG7j0F72z4KYrWbTgtaKxMy2nROF5qiiHaFF/qObeZMmxE9GIxGHkTOZyrERJQREQEREBERAREQEREBERAREQEREBERAxunxfDVfoY+AvNGwNUOtt6/y83rTTAUKoJAujgXIFzqnZOY0GZW1l2zHuf3Q9DZ91mPlmyhlLGXMLXVx1EbV+47JKWiDOGGqZx5QtQz2lOTlwq7z6RUqoiki3Eyce1eXpHq2pqWbbb+DjM7yTUGhzlulUZix+klQOAA9ZpmNrtUOdwNw+57ZufJFx+GUXFwXuLi46bbp20O7/ANOG6jGn/bPRETY84iIgIiICIiAiIgIiICIiAiIgIiICJi8Xp3C0snxFFSPhNRC3gDeYTF+0LBJ7hqVT+SmQPF9WBt01flPywo4QFFtUrfIDkvUXO7htPnNU0v7TKpRhQoCn+d21yM9oUC1+JM06shZyzG5YlietmzJ7yTJiETLadA4ytjKlZ6rl2KKANiohYkqi/CMl42zvLxw5VtVhYjzHWOyWuQw1axHzIw7wQfS83rEaNSqtmGY2EZEcD9pz19HnWMeYd9vr/StMT4lqCUt4uCN4yIkpKlQfEp+pc/KSsRo56Z2a46wOkOK/tLCsDPPtW1ZxMYepW9bxms5U52p10x/hY/eWnpEm7MWPbsHAS+WA2kS7Qw7v7q2HzNkO4bTFa2tOI7Ra9aRmemPenuAJJNgBtJ6hInKIVMNSoujMjo5synMXUlh2qbDI5G03bB6MWmNY3Zz8R226gPhE1Tl9mKafW3oB956Gho8ImZ8vO3Gv9TFa+GW5K8uaeI1aeI1aVXIBtlOoewn3W7D3HdN3nzy2Gzm4aL9o9WmAlWilQIAusjFGsuQuDcE5dk6TDLEurRNMwftFwbe+K1I/mTWHihPpM5hOUmEqW1MRRJO4uFb9LWMhZl4nkG+YnqAiIgIiICIiAiIgIiICcv5WaefFO1Ci5WiuTEH/AOQjIk22r1Dft6rbL7QNNfhsMVU2euSi22hbdNh3ZcWE51hRqIBvOZ49UmIRImi6Y2sx4WAl1cFTGxR35+s8c7HOyyqmPorzTKN+r/qEttQ6RnqrUuLdo9RJ1NBYE7wDCy5oSrzVamxyGuAeDdE+s6pRScgxey43TqGh9KLUwyVTa+otx+a1reNx3GBa5S6UpYemWcXI2AbSdw/mwZzQl0vXciqyJqNeyhQDbdZr3PfLfKTSPPVWuwst1GY37T3+lpYardVQbFUDwFpuptaW0/1xnLDO7tXVmKTjBidPujhlQIo+ZVe58chwzm+clNM06y5gK+W++3Za+4/0nMKuELMW3AEsewC8v6E0uKTpb8qHPbewk22mnWmKRg/69S2pE37z/jtVZJzflXU18SyDYgRO+2sfXym+UtIqaJqEjojPtyuD4ehnLkxBdmqHa7s/iZgxMNyy+GlrRSBedBAN6h2i+QUfuZkdcETG0ntrdrE+Q/aBKqYSk21AOGXpIWI0aoBKk2Gecv8AOxzsCbyR5QthHCsxag56S3uEv8adXaBt42nXUcEAggggEEbCDsInz1UfUZl3X/4nUvZppvnqDUGN2oW1e2m3u/pII4asrMES3eIiQkiIgIiICIiAiJE0ljFoUalZvdpI9Q8EUsfSByLl1pP8RpIoDdMMAnZrDpOf1EL/AIZh8dWyAvtN/CYnQ9Zn16z+/VdmJ6ySWY/qY+EkYmpc8BL4USaeL3N4yQK3bMRrSqvbZAyr4gKLsQANpJsBLyaVSw6dMjrDr+8xCVwSA1ulluzPVLyYSmp1giX69UQM9RfXRrdvpcTI8lseSj4e+ZboZ2HT2j1mF0XXsWXrFx3TzgcRzWLU7ma3ffXX9panknw31OTWHI/tER2O02K+Fs5pPO6pORI6xbf3zqlri42EX8pzbDUwyVbj4LjsIsftNm3vaZnLJuKVxEx1OUBtMIytSCMNfoFiRkCbGb9gNFUeaRkp00ZkU6yooNyoJud+c5Og6bnqt6ztGhzrUKZ60H9JbdZrEYV20xaZiWq8psaaFBqJI13yy+Rr59m8eMwT9CmoPYO+1zPPKjFc7jtQZgP5Jl6Kf1S1pSvmq95+33mK89tsIbadphtRSXbZZQzemQ8ZVa187EX3G1/KWdVb3sLnfbM98s1agU2vf7Sgm87PWKraqq3WAO+0xTVzuykh6l6Y7LesCJiXJNzvmU5FaY/D46kxNlduab6XIAJ4NqnumGrtlMbjWNrgkbrjaOoxgfVUTD8ldKfisHQr76lNS3Y46LjucMO6ZiUXIiICIiAiIgUmj+1zSHNaNdQbNXenRHAnXccCqMO+bxORe23F61TC4fcA9VhxKovkKkmPKJ8NGwnQRV6gPE5mUd7kyzzkpryyq9rT1T6SsR8NvUgyPrT1o1/fHXrDz/rA8YwnUuNqkMO4zK06wZQw2EA+MxTbwe0RoutYFDtQm3A/19YwMxSrarA9XpGlnOTrtUhhxU3EiF57aprJY7pMDsOg8eKuGRxvT0H7Wml4U2Sr9Lj1Ev8As5x+tReiTnTa4+l7/e8gpU6FQ9d/MmbtvGcz+GTcT4j8sIlKxc9eY/njOkcn9IauBV7+4jjvS4H2nPTv4feZBtI6mjKqA5tUCD/GAx8g067muaZ+XDb2xqY9wwmAra9Z6p35Dgf6AeM91a2sxP8ALbpCwz6qW3tn4/0lQ88y3b0oSw8xVOprXf52J7ti+QEuY+vZLDa/RHft8pHXIADdlIwL5eX0fo+MgVny719RL6PkYFKp6JkGqLgiSi0jyYHXfYlpHXwlWgTnQqlgOpKo1h/nFSdKnDfYxjNTHVKW6tSbvamwZf8AKzzuUpPlaPCsREhJERAREQKTgPtRxXOaUqAHKilKnwOrrnzczv0+a9P1DVxmKqfPXq2+kOVX/KBJqrLGXnvWlTSlnWl0LutPOCezHj/PSeNaWqb2YwJ1ZulxzkR6mo4fccj/AD+bJcqPLT5i0DJl555y0h4Z8rHd6S4WkjPcktI8zigSbLUVkPEi6n9QHjMpTb+z42mm33zbMNV16SsN4z7Dvm3azHcfhj3NZzE/lYbfw+8wmMxBPQudXW1rdtrA+HrMriqllPblMAxuSZ03d8Vivtz21M3m3pIDz2ryIGnjEV9VctpyH7zznoKVKmu99yZDjvM960tUaDAbhLxpWBJN+60gWcQ2XeJfV8jIdZtnGXQ8C7rTxPOtJSUYE7kbiuZ0lhXvYGqqHhUBp/7hPpGfL2IVkKOu1GDDipDDzE+naFUOqsNjAMOBFxK2TC7ERKrEREBERAt1b2Nhc2Nh1ndPnJsI6sy1FZXUkMrCxDb7z6QmD0/yYw+LF3Gq4FhUWwYdQO5h2HutJicImHCnoZHgfSYfmTOmaV5EYmjcqvPr8yDpW7U2+F5qNTRxUkbCNoIII4gy0SqwPMmWEF3t13mbxOFcLYKST1bpCw2jqpcEoQBe5NhuMkWeaMpzJmX/AA0fhoGLWnaXAsnthZGanaSLWrMroPEZMh4iQAsUG1HDbP2M66NuN4ly1a8qzCZpWpu7v3mORMpKxS6z26v4YKS24vyvPx0roU41/PaKySLqazX3CTqq7pIp4WwnB3QQT1Q5Yi1hMh+Gj8NIGDrpYjv+0urSJF5Mx+jnOqyqSBe9rX3bpdwWEe1mRhxFoGO5kzOUaGQ4CVXR/WQJs2i+SmJr21UKJ8z3Vbdm9u4SJkaviKQNlGZvsGfZbjO98nKbrhMOtQFXWjTVgdoKoAb9uUxfJzkdRwpDn+1qj42GS/Qu7ibmbPKzK0QrERISREQEREBERASHjNH0aotUp03+pVJHAnMSZEDWq3IrBNmKbJ9NSp9yZbbkNg9VgFqAkWDc4xK9oGw94M2iJORybTHIzEUiSi88nzIOlbtTb4XmuvSsSGBBG0EEEcQZ3yRsTgqdQWqU6bj8yK3qI5Iw4WKYkXGYW3SFs9s7LX5G4J8+aKn8j1F8r28pj6/s9w7bKldb9qH/AGyeSMONtTtLGJplrKNrHynWqvswQ7MS440lPowlin7LQGv+Kv8A/R/5yeUHFzpKUq6zpa+zQb8Sf/xH/fLiezSn8WIqHgiL63jlBhzTBYW51jsGzjJppDsnTaPs/wAKtrtXa3W6AeSzI4fkhgk/uQx/M7t5E28pHIw5CtO5sASTsAFyeAmb0dySxVYgikaa/NU6A/T7x8J1nDYOnTFqaIg6lRV9BJMjknDUMByEw6paqXqsbdIMyBexQp9b90vpyHwY2rUbsNVvtabREZMMZgdCYajnTo01I+LVu36mufOZOIkJIiICIiAiIgIiICIiAiIgUiViAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//2Q=="}
                                        className="rounded-circle update-img"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* img url */}
                                        <div className='mb-2 fw-bold text-secondary'>
                                            Image URL
                                            <input type="text"
                                                placeholder='Enter your image url'
                                                className={`form-control ${errors.img?.message ? 'is-invalid' : ''}`}                                            
                                                defaultValue={contact.img}
                                                {...register("img")}/>
                                            <span className="invalid-feedback">{errors.img?.message}</span>
                                        </div>
                                        {/* name */}
                                        <div className='mb-2 fw-bold text-secondary'>
                                            Name
                                            <input type="text"
                                                placeholder='Enter name'
                                                defaultValue={contact.name}
                                                className={`form-control ${errors.name?.message ? 'is-invalid' : ''}`}
                                                {...register("name")} />
                                            <span className="invalid-feedback">{errors.name?.message}</span>
                                        </div>
                                        {/* email */}
                                        <div className='mb-2 fw-bold text-secondary'>
                                            Email
                                            <input type="email"
                                                placeholder='Enter email'
                                                defaultValue={contact.email}
                                                className={`form-control ${errors.email && 'is-invalid'}`}
                                                {...register("email")} />
                                            <span className="invalid-feedback">{errors.email?.message}</span>
                                        </div>
                                        {/* address */}
                                        <div className="mb-2 fw-bold text-secondary">
                                            Address
                                            <input type="text"
                                                placeholder='Enter address'
                                                defaultValue={contact.address}
                                                className={`form-control ${errors.address && 'is-invalid'}`}
                                                {...register("address")} />
                                            <span className="invalid-feedback">{errors.address?.message}</span>
                                        </div>
                                        {/* age */}
                                        <div className="mb-2 fw-bold text-secondary">
                                            Age
                                            <input type="number"
                                                placeholder='Enter age'
                                                defaultValue={contact.age}
                                                className={`form-control ${errors.age && 'is-invalid'}`}
                                                {...register("age")} />
                                            <span className="invalid-feedback">{errors.age?.message}</span>
                                        </div>
                                        {/* company */}
                                        <div className="mb-2 fw-bold text-secondary">
                                            Company
                                            <input type="text"
                                                placeholder='Enter company name'
                                                defaultValue={contact.company}
                                                className={`form-control ${errors.company && 'is-invalid'}`}
                                                {...register("company")} />
                                            <span className="invalid-feedback">{errors.company?.message}</span>
                                        </div>
                                        {/* contact */}
                                        <div className="mb-3 fw-bold text-secondary">
                                            Contact No
                                            <input type="number"
                                                placeholder='Enter contact no.'
                                                defaultValue={contact.contactNo}
                                                className={`form-control ${errors.contactNo && 'is-invalid'}`}
                                                {...register("contactNo")} />
                                            <span className="invalid-feedback">{errors.contactNo?.message}</span>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-6 d-grid">
                                                <Link to="/" className="btn btn-dark">
                                                    <i className="fas fa-caret-left"></i> Cancel
                                                </Link>
                                            </div>
                                            <div className="col-6 d-grid">
                                                <button type='submit' className="btn btn-success">
                                                    Update
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

export default Update_Contact
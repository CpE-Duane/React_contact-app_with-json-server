import * as yup from 'yup'

let Schema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Invalid email.").required("Email is required."),
    age: yup.number().transform((value: any) => (isNaN(value) ? undefined : value)).required("Age is required."),
    // password: yup.string().min(4).max(20).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    address: yup.string().required("Address is required."),
    company: yup.string().required("Company name is required."),
    img: yup.string().required("Image url is required."),
    contactNo: yup.number().transform((value: any) => (isNaN(value) ? undefined : value)).required("Contact number is required."),
})

export default Schema
import * as Yup from 'yup';


export const SignUpvalidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    age: Yup.number()
        .required("Age is Required")
        .positive('Age must be a positive number')
        .integer('Age must be an integer'),
    birthdate: Yup.date()
        .required("Date of Birth is required")
        .max(new Date(), 'Date of Birth cannot be in the future'),
    gender: Yup.string().required("Gender is required"),
    detail: Yup.string().required("Detail is required")


});

import React from 'react';
import FormElements from '../components/FormElements.tsx';
import { SignUpSchema } from '../FormSchema/SignUpSchema.ts';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { SignUpvalidationSchema } from '../Validation/SignUpValidation.ts';

const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        birthdate: '',
        gender: '',
        detail: ''
    };

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpvalidationSchema,
        onSubmit: async (values, action) => {
            try {
                console.log(values);
                action.resetForm();
                navigate("/login");
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <main className='form_Section font-sans px-4 py-12'>
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit} className='max-w-md mx-auto lg:shadow-2xl md:shadow-2xl p-8'>
                    <h1 className='mb-8 text-4xl font- text-blue-700 text-center'>Registeration</h1>
                    <FormElements
                        formData={SignUpSchema}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                    />
                    <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer text-center font-semibold capitalize outline-none" type="submit">Sign up</button>
                </form>
            </div>
        </main>
    );
};

export default SignUp;

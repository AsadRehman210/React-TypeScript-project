import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/action/UserAction.ts';
import { useNavigate } from 'react-router-dom';
import FormElements from '../components/FormElements.tsx';
import { LogInSchema } from '../FormSchema/LogInSchema.ts';
import { LogInvalidationSchema } from '../Validation/LoginValidation.ts';
import { useFormik } from 'formik';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: '',
    };

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: LogInvalidationSchema,
        onSubmit: async (values, action) => {
            try {
                dispatch(login("user_login_successfully"));
                navigate("/")

            } catch (error) {
                console.log(error);
            }
        }
    });


    return (
        <main className='px-4 py-5 flex items-center justify-center' style={{ height: `calc(100vh - 5rem)` }}>
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit} className='max-w-md mx-auto lg:shadow-2xl md:shadow-2xl p-8 rounded-lg '>
                    <h1 className='mb-8 text-4xl font- text-blue-700 text-center'>Login</h1>
                    {<FormElements
                        formData={LogInSchema}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}

                    />
                    }
                    <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer text-center font-semibold capitalize outline-none" type="submit">Sign in</button>

                </form>
            </div>
        </main>
    )
}

export default Login

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormElements from '../components/FormElements.tsx';
import { SignUpSchema } from '../FormSchema/SignUpSchema.ts';
import { FormData } from '../Types/Types.ts';

const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            console.log(data);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className='form_Section font-sans px-4 py-12'>
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto lg:shadow-2xl md:shadow-2xl p-8'>
                    <h1 className='mb-8 text-4xl text-blue-700 text-center'>Registration</h1>
                    <FormElements
                        formData={SignUpSchema}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                    />
                    <button
                        className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer text-center font-semibold capitalize outline-none"
                        type="submit"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </main>
    );
};

export default SignUp;

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormField, FormData } from '../Types/Types.ts';

interface FormElementsProps {
    formData: FormField[];
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>; 
    getValues?: (field: string) => any; 
}

const FormElements: React.FC<FormElementsProps> = ({ formData, register, errors = {}, getValues }) => {
    return (
        <>
            {formData.map((data: FormField, index: number) => {
                const hasError = errors[data.name]?.message;

                switch (data.type) {
                    case "select":
                        return (
                            <div key={index} className="mb-3">
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <select
                                    className={`block bg-white w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    {...register(data.name, {
                                        required: `${data.label} is required`,
                                    })}
                                >
                                    <option value="">Select {data.label}</option>
                                    {data.options?.map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {hasError && <p className="mt-2 text-sm text-red-600">{hasError}</p>}
                            </div>
                        );
                    case "checkbox":
                        return (
                            <div className="mb-3" key={index}>
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <input
                                    type="checkbox"
                                    className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    {...register(data.name, {
                                        required: `${data.label} is required`,
                                    })}
                                />
                                {hasError && <p className="mt-2 text-sm text-red-600">{hasError}</p>}
                            </div>
                        );
                    case "radio":
                        return (
                            <div className="mb-3" key={index}>
                                {data.options?.map(option => (
                                    <div className="form-check" key={option.value}>
                                        <label className='block mb-2 text-lg font-md'>{option.label}</label>
                                        <input
                                            type="radio"
                                            className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                            {...register(data.name, {
                                                required: `${data.label} is required`,
                                            })}
                                            value={option.value}
                                        />
                                    </div>
                                ))}
                                {hasError && <p className="mt-2 text-sm text-red-600 font-medium">{hasError}</p>}
                            </div>
                        );
                    case "textarea":
                        return (
                            <div className="mb-3" key={index}>
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <textarea
                                    className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    placeholder={data.placeholder}
                                    {...register(data.name, {
                                        required: `${data.label} is required`,
                                    })}
                                />
                                {hasError && <p className="mt-2 text-sm text-red-600">{hasError}</p>}
                            </div>
                        );
                    default:
                        return (
                            <div className={`mb-3`} key={index}>
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <input
                                    type={data.type}
                                    className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    placeholder={data.placeholder}
                                    {...register(data.name, {
                                        required: `${data.label} is required`,

                                        pattern: data.name === 'email' ? {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email address'
                                        } : undefined,

                                        validate: data.name === 'confirmPassword' ? (value) =>
                                            value === getValues?.('password') || 'Passwords do not match'
                                            : undefined,

                                        min: data.name === 'age' ? {
                                            value: 1,
                                            message: 'Age must be a positive number'
                                        } : undefined,
                                        
                                        max: data.name === 'birthdate' ? {
                                            value: new Date().getTime(), 
                                            message: 'Date of Birth cannot be in the future'
                                        } : undefined,
                                    })}
                                />
                                {hasError && <p className="mt-2 text-sm text-red-600">{hasError}</p>}
                            </div>
                        );
                }
            })}
        </>
    );
};

export default FormElements;

import React from 'react';
import { FormField } from '../Types/Types.ts';

interface FormElementsProps {
    formData: FormField[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    values: { [key: string]: string | boolean };
    errors: { [key: string]: string | undefined };
    touched: { [key: string]: boolean | undefined };
}

const FormElements: React.FC<FormElementsProps> = ({ formData, handleChange, handleBlur, values = {}, errors = {}, touched = {} }) => {

    return (
        <>
            {formData.map((data: FormField, index: number) => {

                const hasError = errors[data.name] && touched[data.name];

                switch (data.type) {
                    case "select":
                        return (
                            <div key={index} className="mb-3">
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <select
                                    className={`block bg-white w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    name={data.name}
                                    required={data.required}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[data.name] as string || ''}
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
                                {hasError && <p className="mt-2 text-sm text-green-600">{errors[data.name]}</p>}
                            </div>
                        );
                    case "checkbox":
                        return (
                            <div className=" mb-3" key={index}>
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <input
                                    type="checkbox"
                                    className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    name={data.name}
                                    required={data.required}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values[data.name] as boolean || false}
                                />

                                {hasError && <p className="mt-2 text-sm text-green-600">{errors[data.name]}</p>}
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
                                            name={data.name}
                                            value={option.value}
                                            required={data.required}
                                            checked={values[data.name] === option.value}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                    </div>
                                ))}
                                {hasError && <p className="mt-2 text-sm text-green-600 font-medium">{errors[data.name]}</p>}
                            </div>
                        );
                    case "textarea":
                        return (
                            <div className=" mb-3" key={index}>
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <textarea
                                    className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    placeholder={data.placeholder}
                                    name={data.name}
                                    required={data.required}
                                    style={{ height: "120px" }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[data.name] as string || ''}
                                />

                                {hasError && <p className="mt-2 text-sm text-green-600">{errors[data.name]}</p>}
                            </div>
                        );
                    default:
                        return (
                            <div className={` mb-3`} key={index}>
                                <label className='block mb-2 text-lg font-md'>{data.label}</label>
                                <input
                                    type={data.type}
                                    className={`block w-full px-3 py-2 border rounded outline-none ${hasError ? 'border-red-500' : 'border-gray-400'}`}
                                    placeholder={data.placeholder}
                                    name={data.name}
                                    required={data.required}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[data.name] as string || ''}
                                />

                                {hasError && <p className="mt-2 text-sm text-green-600">{errors[data.name]}</p>}
                            </div>
                        );
                }
            })}
        </>
    );
};

export default FormElements;

import { FormField } from "../Types/Types.ts";

export const SignUpSchema: FormField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email address',
    required: true
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Re-Enter your password',
    required: true
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
    required: true
  },
  {
    name: 'birthdate',
    label: 'Date of Birth',
    type: 'date',
    placeholder: "Enter Your DOB",
    required: true
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ],
    required: true
  },
  {
    name: 'detail',
    label: 'Detail',
    type: 'textarea',
    placeholder: 'Write a short detail about yourself',
    required: true
  },
];

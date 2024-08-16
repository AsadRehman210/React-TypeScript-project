export type LoginAction = {
    type: "User_Login";
    payload: string;
};

export type LogoutAction = {
    type: "User_logout";
};

export type UserState = {
    token: string | null;
}

export type RootState = {
    user: UserState;
};

export type FormField = {
    name: "email" | "password" | "name" | "confirmPassword" | "age" | "birthdate" | "gender" | "detail";
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio';
    placeholder?: string;
    required: boolean;
    options?: { value: string; label: string }[];
};

export type Cards = {
    userId: number | "";
    id: number | "";
    title: string;
    body: string;
}
export type CardProps = {
    id: number | "";
    title: string;
    body: string;
}
export interface PaginationProps {
    CurrentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

export interface FormData {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    age?: number;
    birthdate?: Date;
    gender?: string;
    detail?: string;
}

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/UserAction.ts';
import { RootState } from '../Types/Types.ts';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const token = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(logout());
        handleToggle()
    };

    return (
        <header className="bg-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    <div className="lg:hidden md:hidden">
                        <button onClick={handleToggle} className="text-2xl text-gray-800">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                    </div>
                    <div className="hidden lg:flex md:flex lg:gap-4 md:gap-4">
                        <ul className="flex flex-row gap-4">
                            {token && (
                                <>
                                    <li className="text-lg font-semibold">
                                        <NavLink to="/home">Home</NavLink>
                                    </li>
                                    <li className="text-lg font-semibold">
                                        <NavLink to="/slider">Slider</NavLink>
                                    </li>
                                    <li className="text-lg font-semibold">
                                        <NavLink to="/tabs">Tabs</NavLink>
                                    </li>
                                </>
                            )}
                            {!token ? (
                                <>
                                    <li className="text-lg font-semibold">
                                        <NavLink to="/login">Login</NavLink>
                                    </li>
                                    <li className="text-lg font-semibold">
                                        <NavLink to="/signup">Signup</NavLink>
                                    </li>
                                </>
                            ) : (
                                <li className="text-lg font-semibold">
                                    <NavLink to="/logout" onClick={() => dispatch(logout())}>
                                        Logout
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>


            <div className={`fixed inset-0 z-20 bg-black bg-opacity-80 ${menuOpen ? 'block' : 'hidden'}`} onClick={handleToggle}></div>
            <div className={`lg:hidden md:hidden px-1 pt-8  bg-white fixed inset-y-0 left-0 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50`}>
                <div className="absolute right-2 top-1" >
                    <button onClick={handleToggle} className="text-gray-600 hover:text-gray-900 text-xl ">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>


                <ul className="flex flex-col gap-4 p-4 text-blue-600 ">
                    {token && (
                        <li className="text-lg font-semibold hover:text-blue-900">
                            <NavLink to="/home" onClick={handleToggle}>
                                <i className="fa-solid fa-house mr-2"></i>
                                Home
                            </NavLink>
                        </li>
                    )}
                    {!token ? (
                        <>
                            <li className="text-lg font-semibold hover:text-blue-900">
                                <NavLink to="/login" onClick={handleToggle}>
                                    <i className="fa-solid fa-gears mr-2"></i>
                                    Login
                                </NavLink>
                            </li>
                            <li className="text-lg font-semibold hover:text-blue-900">
                                <NavLink to="/signup" onClick={handleToggle}>
                                    <i className="fa-solid fa-user-plus mr-2"></i>
                                    Signup
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <li className="text-lg font-semibold hover:text-blue-900">
                            <NavLink to="/logout" onClick={Logout}>
                                <i className="fa-solid fa-right-from-bracket mr-2"></i>
                                Logout
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>

        </header>
    );
};

export default Header;

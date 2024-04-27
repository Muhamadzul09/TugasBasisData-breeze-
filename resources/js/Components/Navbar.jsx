import { useState } from "react";
import { Link } from "@inertiajs/react";
import Image from '/public/img/logo.png';

const Navbar = ({ user }) => {
    console.log("user", user);

    return (
        <div className="navbar bg-green-400 fixed top-0 w-full z-10 ">
            <div className="container mx-auto px-4 flex justify-between items-center py-3">
                <div>
                    <Link
                        href="/"
                        className="btn btn-ghost text-xl sm:text-3xl"
                    >
                        <span className="text-yellow-200">Green</span><span className="text-white">Plants</span>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex="0"
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User avatar"
                                    src={Image}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="0"
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        > 
                            {user ? (
                                <>
                                    <li key="dashboard">
                                        <Link
                                            href={route("dashboard")}
                                            as="button"
                                            className="justify-between"
                                        >
                                            Dashboard
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li key="logout">
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li key="login">
                                        <Link href={route("login")} as="button">
                                            Login
                                        </Link>
                                    </li>
                                    <li key="register">
                                        <Link
                                            href={route("register")}
                                            as="button"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                    <li key="kelompok">
                                        <Link
                                            href={route("kelompok")}
                                            as="button"
                                        >
                                            Kelompok
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcAbout,FcNext, FcBusinessman, FcBusinesswoman, FcServices, FcSettings, FcTodoList,FcPlus } from 'react-icons/fc';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../utilities/firebase.init';

export default function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    // const { isAdmin } = useAdmin(user)
    const isAdmin = true

    return (
        <section>
            <main className="drawer drawer-mobile h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}

                        <div className="flex flex-col justify-between h-[85vh] bg-white border-r">
                            <div className="px-4 py-6">

                                <nav className="flex flex-col mt-6 space-y-1">
                                    <Link
                                        to="/dashboard"
                                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                    >
                                        <FcPlus />
                                        <span className="ml-3 text-sm font-medium uppercase">Create new product </span>
                                        <FcNext className='ml-auto'/>
                                    </Link>
                                    <Link
                                        to="review"
                                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                    >
                                        <FcAbout />
                                        <span className="ml-3 text-sm font-medium"> Review </span>
                                    </Link>
                                    {isAdmin && <>
                                        <Link
                                            to="users"
                                            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                        >
                                            <FcBusinessman />
                                            <span className="ml-3 text-sm font-medium"> All Users </span>
                                        </Link>
                                        <Link
                                            to="add_doctor"
                                            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                        >
                                            <FcBusinesswoman />
                                            <span className="ml-3 text-sm font-medium"> Add New Doctor </span>
                                        </Link>
                                        <Link
                                            to="manageDoctor"
                                            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                        >
                                            <FcServices />
                                            <span className="ml-3 text-sm font-medium"> Manage Doctors </span>
                                        </Link>
                                    </>}

                                    <Link
                                        to="settings"
                                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                    >
                                        <FcSettings />
                                        <span className="ml-3 text-sm font-medium"> Settings </span>
                                    </Link>



                                </nav>
                            </div>

                            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                                <Link to="/dashboard" className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
                                    <img
                                        className="object-cover w-10 h-10 rounded-full"
                                        src="https://www.hyperui.dev/photos/man-4.jpeg"
                                        alt="Simon Lewis"
                                    />

                                    <div className="ml-1.5">
                                        <p className="text-xs">
                                            <strong className="block font-medium">{user?.displayName || "Set the name"}</strong>

                                            <span> {user?.email} </span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </ul>

                </div>
            </main>
        </section>
    )
}




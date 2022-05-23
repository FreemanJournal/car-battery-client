import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcAbout, FcHome, FcNext, FcBusinessman, FcBusinesswoman, FcServices, FcSettings, FcTodoList, FcPlus } from 'react-icons/fc';
import { GrShop,GrFormNext } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../utilities/firebase.init';

export default function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    // const { isAdmin } = useAdmin(user)
    const isAdmin = true

    const sideMenu = [
        {
            title: "My Orders",
            path: "/dashboard",
            icon: <GrShop />,
            isActive: true
        },
        {
            title: "My Profile",
            path: "/dashboard/myProfile",
            icon: <CgProfile />,
            isActive: true
        },
        {
            title: "Give a review",
            path: "/dashboard/createNewReview",
            icon: <BsFillChatRightTextFill />,
            isActive: true
        },
        {
            title: "Create new product",
            path: "/dashboard/createNewProduct",
            icon: <FcPlus />,
            isActive: true
        },
        {
            title: "Manage Products",
            path: "/dashboard/manageProduct",
            icon: <FcServices />,
            isActive: true
        },
        {
            title: "Settings",
            path: "/dashboard",
            icon: <FcSettings />,
            isActive: true
        },
    ]

    return (
        <section className='relative'>
            <main className="drawer drawer-mobile h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  relative">
                    {/* <!-- Page content here --> */}
                    <Outlet />


                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className=""></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}

                        <div className="flex flex-col justify-between h-[85vh] bg-white border-r">
                            <div className="px-4 py-6">
                                <p
                                    className="flex items-center text-3xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                >
                                    <FcHome />
                                    <span className="ml-3 text-sm font-medium uppercase">Welcome to dashboard </span>

                                </p>
                                <nav className="flex flex-col mt-6 space-y-1">
                                    {
                                        sideMenu.map((item, i) => (
                                            <Link
                                                to={item.path}
                                                key={i}
                                                className="flex items-center focus:bg-amber-300 px-4 py-2 text-gray-700 group bg-gray-100 rounded-lg hover:bg-slate-200  "
                                            >
                                                {item.icon}
                                                <span className="ml-3 text-sm font-medium uppercase">{item.title} </span>
                                                <GrFormNext className='ml-auto' />
                                            </Link>
                                        ))
                                    }

                                </nav>
                            </div>

                            {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
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
                            </div> */}
                        </div>
                    </ul>

                </div>
            </main>
        </section>
    )
}




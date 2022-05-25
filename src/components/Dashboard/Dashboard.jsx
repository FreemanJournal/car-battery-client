import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillBagPlusFill, BsFillChatRightQuoteFill, BsPersonBadge, BsPersonBoundingBox, BsPersonPlusFill, BsSliders } from 'react-icons/bs';
import { FcHome } from 'react-icons/fc';
import { GrFormNext, GrShop } from 'react-icons/gr';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../utilities/firebase.init';
import Loader from '../../utilities/Loader';

export default function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const { isAdmin, adminLoading } = useAdmin(user,loading)

    if (adminLoading) return <Loader />

    const sideMenu = [
        {
            title: "My Orders",
            path: "/dashboard/myOrders",
            icon: <GrShop />,
            isActive: !isAdmin
        },
        {
            title: "My Profile",
            path: "/dashboard/myProfile",
            icon: <BsPersonBadge />,
            isActive: true
        },
        {
            title: "Give a review",
            path: "/dashboard/createNewReview",
            icon: <BsFillChatRightQuoteFill />,
            isActive: !isAdmin
        },
        {
            title: "Manage All Orders",
            path: "/dashboard/manageOrders",
            icon: <BsSliders />,
            isActive: isAdmin
        },
        {
            title: "Create new product",
            path: "/dashboard/createNewProduct",
            icon: <BsFillBagPlusFill />,
            isActive: isAdmin
        },
        {
            title: "Manage Products",
            path: "/dashboard/manageProduct",
            icon: <BsSliders />,
            isActive: isAdmin
        },

        {
            title: "Make Admin",
            path: "/dashboard/makeAdmin",
            icon: <BsPersonPlusFill />,
            isActive: isAdmin
        },
        // {
        //     title: "My Portfolio",
        //     path: "/dashboard/portfolio",
        //     icon: <BsPersonBoundingBox />,
        //     isActive: true
        // },
    ]

    return (
        <section className='relative'>
            <main className="drawer drawer-mobile h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  relative">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl text-pink-600 font-bold'>Welcome to your dashboard!</h2>
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}

                        <div className="flex flex-col justify-between h-[85vh] bg-white border-r">
                            <div className="px-4 py-6">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center text-3xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                                >
                                    <FcHome />
                                    <span className="ml-3 text-sm font-medium uppercase">Welcome to dashboard </span>

                                </Link>
                                <nav className="flex flex-col mt-6  space-y-1">
                                    {
                                        sideMenu.map((item, i) => (
                                            <Link
                                                to={item.path}
                                                key={i}
                                                className={`${item.isActive ? "flex" : "hidden"} items-center focus:bg-amber-300 px-4 py-2 text-gray-700  bg-gray-100 rounded-lg hover:bg-slate-200`}
                                            >
                                                {item.icon}
                                                <span className="ml-3 text-sm font-medium uppercase">{item.title} </span>
                                                <GrFormNext className='ml-auto' />
                                            </Link>
                                        ))
                                    }

                                </nav>
                            </div>
                        </div>
                    </ul>

                </div>
            </main>
        </section>
    )
}




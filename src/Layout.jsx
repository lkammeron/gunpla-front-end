import { Link, Outlet } from "react-router";
import logo from './assets/gp-logo.png';

function Layout(){
    return(
        <>
            <div className="container w-full md:max-w-3xl mx-auto pt-4">
                <header>
                    <div className="grid grid-cols-2">
                        <div className="grid grid-flow-col justify-self-start">
                            <img className="max-w-24 max-h-24" src={logo}  alt="logo GunplaPedia"/>
                            <span><h3 className="font-extrabold text-3xl text-gray-900 mt-8 antialiased">Gunpla-Pedia</h3></span>
                        </div>
                        <nav className="mt-8 grid grid-flow-col justify-self-end">
                            <Link to={`/`} className="pr-4 w-auto hover:text-blue-300 hover:font-bold">Home</Link>
                            <Link to={`/gunpla`} className="pr-4 w-auto hover:text-blue-300 active:text-blue-500">Gunpla</Link>
                            <Link to={`/create`} className="pr-4 w-auto">Create Gunpla</Link>
                        </nav>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;
import {useEffect, useState} from "react";
import {Link} from "react-router";
import head from "./assets/img-header-gp.png";
import {GunplaSearch} from "./components/gunplaSearch.jsx";

function Gunpla(){
    const [gundams, setGundams] = useState([]);
    const [setGunplas] = useState([]);

    useEffect(() => {
        async function getGundams(){
            try {//http://145.24.237.238:8001
                const response = await fetch('http://145.24.237.238:8001/gunpla/', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                });
                const data = await response.json();
                setGundams(data.items);
                console.log(data);
            }
            catch(error){
                console.error("Er is iets fout gegaan!", error);
            }
        }
        getGundams();
    }, []);

    return (
        <>
            <GunplaSearch onSearch={setGunplas} />
            <div className="grid grid-cols-2">
                {gundams.map((gundam) => (
                    <div key={gundam.id} >
                        <div className="bg-blue-500 rounded-xl max-w-sm ml-2 mt-2 shadow-xs">
                            <Link to={`/gunpla/${gundam.id}`}><img
                                className="rounded-t-lg h-48 w-96 object-none object-[1%_45%]"
                                src={head}
                                alt="gunpla-box"
                            /></Link>
                            <div className="p-6 text-center">
                                <h3 className="mt-3 mb-6 font-extrabold text-3xl text-gray-900 antialiased">
                                    {gundam.name}
                                </h3>
                                <h5>Grade: {gundam.grade}</h5>
                                <h5>Scale: {gundam.scale}</h5>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded ">
                                    <Link to={`/gunpla/${gundam.id}`}>Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gunpla
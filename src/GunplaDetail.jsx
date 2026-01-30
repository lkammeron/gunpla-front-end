import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";
import {deleteGunpla} from "./services/gunplaService.js";

function GunplaDetail() {
  const {id} = useParams(); //gunpla_id uit de url opvangen
  const navigate = useNavigate();
  const [gunpla, setGunpla] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGunpla = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `http://145.24.237.238:8001/gunpla/${id}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    new Error("Gunpla niet gevonden");
                }

                const data = await response.json();
                setGunpla(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGunpla();
    }, [id]);

    if (loading) {
        return <p>Gunpla wordt geladen...</p>;
    }

    if (error) {
        return <p>Fout: {error}</p>;
    }

    if (!gunpla) {
        return <p>Geen data</p>;
    }
    const handleDelete = async () => {
        try{
            const response = await deleteGunpla(id);
            if (response.status === 204) {
                navigate("/gunpla")
                // hier evt navigate('/') of state update
            }
            else{
                console.error("Delete Failed");
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <article>
            <div>
                <div className="h-48 w-auto overflow-hidden">
                    <img className="rounded-t-lg object-cover" src={gunpla.imageUrl} alt={gunpla.name}/>
                </div>
                &nbsp;
                <h1 className="font-extrabold text-3xl text-center">{gunpla.name}</h1>
                &nbsp;
                <h3 className="font-extrabold text-xl text-center">{gunpla.origin}</h3>
                &nbsp;
                <div className="grid grid-cols-2 grid-flow-col-dense">
                    <div className="bg-yellow-500 h-24 w-auto text-center p-4 text-white font-semibold">
                        <p>Grade: {gunpla.grade}</p>
                        <p>Title: {gunpla.title}</p>
                    </div>
                    <div className="bg-red-500 h-24 w-auto text-center p-4 text-white font-semibold">
                        <p>Scale: {gunpla.scale}</p>
                        <p>Unit-Type: {gunpla.unitType}</p>
                    </div>
                </div>
                <p>{gunpla.description}</p>

                <button onClick={handleDelete}  className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded">
                    Delete Gunpla
                </button>
                <Link
                    to={`/gunpla/${id}/edit`}
                    className="bg-yellow-500 px-4 py-2 rounded"
                >
                    Edit
                </Link>
            </div>
        </article>
    );
}

export default GunplaDetail;

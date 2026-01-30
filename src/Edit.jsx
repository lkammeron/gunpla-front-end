import {useEffect, useState} from 'react';
import { editGunpla } from './services/gunplaService';
import {useNavigate, useParams} from "react-router";

function EditGunpla() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        origin: "",
        title: "",
        grade: "",
        scale: "",
        unitType: "",
        description: "",
        imageUrl: "",
    });

    useEffect(() => {
        const fetchGunpla = async () => {
            try {
                const response = await fetch(
                    `http://145.24.237.238:8001/gunpla/${id}`, {
                        method: "GET",
                            headers: {
                            Accept: "application/json",
                        },
                    }
                );

                const data = await response.json();
                setFormData({
                    name: data.name ?? "",
                    origin: data.origin ?? "",
                    title: data.title ?? "",
                    grade: data.grade ?? "",
                    scale: data.scale ?? "",
                    unitType: data.unitType ?? "",
                    description: data.description ?? "",
                    imageUrl: data.imageUrl ?? "",
                });
            } catch (error) {
                console.error("FETCH FAILED:", error);
            }
        };

        fetchGunpla();
    }, [id]);


    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await editGunpla(id, formData);

        if (response.ok) {
            navigate(`/gunpla/${id}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={formData.name} onChange={handleChange} />
            <input name="origin" value={formData.origin} onChange={handleChange} />
            <input name="title" value={formData.title} onChange={handleChange} />
            <input name="grade" value={formData.grade} onChange={handleChange} />
            <input name="scale" value={formData.scale} onChange={handleChange} />
            <input name="unitType" value={formData.unitType} onChange={handleChange} />
            <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
            <textarea name="description" value={formData.description} onChange={handleChange} />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Update Gunpla
            </button>
        </form>
    );
}

export default EditGunpla;

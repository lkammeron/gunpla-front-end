import { useState } from 'react';
import { createGunpla } from './services/gunplaService';

function CreateGunpla() {
    const [formData, setFormData] = useState({
        name: '',
        origin: '',
        grade: '',
        scale: '',
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await createGunpla(formData);
            alert('Gunpla aangemaakt!');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} />

            <select name="origin" onChange={handleChange}>
                <option value="">Kies origin</option>
                <option value="gundam">Gundam</option>
                <option value="zoid">Zoid</option>
            </select>

            <select name="grade" onChange={handleChange}>
                <option value="">Kies grade</option>
                <option value="HG">HG</option>
                <option value="MG">MG</option>
            </select>

            <select name="scale" onChange={handleChange}>
                <option value="1/144">1/144</option>
                <option value="1/100">1/100</option>
            </select>

            <button type="submit">Create</button>
        </form>
    );
}

export default CreateGunpla;

import { useState } from 'react';

function CreateGundam(){
    const [formData, setFormData] =
        useState({name: "", origin: "", grade: "", title: "", scale: "", unitType: "", description: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Title: ${formData.title}, Description: ${formData.message}`
        );
    };

return(
    <>
        <form className="grid grid-cols-1" action={handleSubmit}>
            <label>
                Name:<input name="name" value={formData.name} defaultValue="Gundam Shenlong" onChange={handleChange}/>
            </label>
            <label>
                Origin:<input name="type" value={formData.origin} defaultValue="Mobile Suit Gundam Wing" onChange={handleChange}/>
            </label>
            <label>
                Grade:<input name="type" value={formData.grade} defaultValue="MG" onChange={handleChange}/>
            </label>
            <label>
                Title:<input name="type" value={formData.title} defaultValue="Gundam Zero-Five" onChange={handleChange}/>
            </label>
            <label>
                Scale:<input name="type" value={formData.scale} defaultValue="1/100" onChange={handleChange}/>
            </label>
            <label>
                Unit-Type:<input name="type" value={formData.unitType} defaultValue="RX-78-2(Inspired)" onChange={handleChange}/>
            </label>
            <label>
                Description:<textarea  name="description" value={formData.description} defaultValue="RX-78-2(Inspired)" onChange={handleChange}/>
            </label>
            <button type="submit">Submit form</button>
        </form>
    </>
    )
}

export default CreateGundam
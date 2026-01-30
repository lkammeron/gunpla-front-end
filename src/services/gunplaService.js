//Post Function
export async function createGunpla(formData) {
    const response = await fetch('http://145.24.237.238:8001/gunpla', {
        method: "POST",
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error('Gunpla kon niet worden aangemaakt');
    }

    return await response.json();
}

export async function deleteGunpla(id){
    return await fetch(`http://145.24.237.238:8001/gunpla/${id}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    });
}

export async function editGunpla(id, data){
    return await fetch(`http://145.24.237.238:8001/gunpla/${id}`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

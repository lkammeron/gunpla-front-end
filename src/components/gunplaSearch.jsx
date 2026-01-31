import {useState} from "react";

export function GunplaSearch({  onResults, setLoading }) {
    const [search, setSearch] = useState('');
    const [origin, setOrigin] = useState('');

    const handleSearch = async () => {
        setLoading(true);

        const res = await fetch(
            `http://145.24.237.238:8001/gunpla?q=${search}&${origin}&limit=10`,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }
        );
        const data = await res.json();

        onResults(data.items);
        setLoading(false);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search gunpla..."
            />
            <select name="origin" onChange={(e) => setOrigin(e.target.value)}>
                <option value={origin}>Kies origin</option>
                <option value="gundam">Gundam</option>
                <option value="zoid">Zoid</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

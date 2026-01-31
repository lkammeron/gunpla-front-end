import {useState} from "react";

export function GunplaSearch({ onSearch }) {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        const res = await fetch(
            `http://145.24.237.238:8001/gunpla?q=${search}&limit=10`
        );
        const data = await res.json();
        onSearch(data);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search gunpla..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { citiesData } from "./data";

const AddCity = () => {
    const [name, setName] = useState("");//stating city name
    const [country, setCountry] = useState("");//stating country name
    const [population, setPopulation] = useState("");//stating population
    const navigate = useNavigate();  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCity = { id: citiesData.length + 1, name, country, population };
        citiesData.push(newCity);  //Adds new city to the list
        navigate("/");  // Redirects back to Cities List
    };

    return (
        <div>
            <h2>Add City</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                <input type="text" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} required />
                <button type="submit">Add City</button>
            </form>
        </div>
    );
};

export default AddCity;

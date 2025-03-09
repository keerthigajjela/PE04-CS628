import { Link } from "react-router-dom";
import { citiesData } from "./data";  //Importing the city data

const CitiesList = () => {
    return (
        <div>
            <h2>Cities List</h2>
            <ul>
                {citiesData.map(city => (
                    <li key={city.id}>
                        <Link to={`/city/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CitiesList;


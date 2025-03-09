import { useParams } from "react-router-dom";
import { citiesData } from "./data";  

const CityDetails = () => {
    const { id } = useParams();
    const city = citiesData.find(c => c.id === parseInt(id));

    if (!city) return <h2>City not found</h2>;

    return (
        <div>
            <h2>{city.name} Details</h2>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
        </div>
    );
};

export default CityDetails;

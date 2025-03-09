import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CitiesList from "./CitiesList";// Importing CitiesList 
import AddCity from "./AddCity";// Importing AddCity 
import CityDetails from "./CityDetails";// Importing CityDetails 

const App = () => {
    return (
        <Router>  
            <div>
                <h1>Cities Application</h1>
                <nav>
                    <Link to="/">Cities List</Link> | <Link to="/add-city">Add City</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<CitiesList />} />
                    <Route path="/add-city" element={<AddCity />} />
                    <Route path="/city/:id" element={<CityDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

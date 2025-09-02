import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import TechnicianUpload from "./components/TechnicianUpload";
import DentistViewer from "./components/DentistViewer";

function App() {
    const [role, setRole] = useState(null);

    useEffect(() => {
        setRole(localStorage.getItem("role"));
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setRole(null);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={role ? <Navigate to={role === "technician" ? "/upload" : "/viewer"} /> : <Login setRole={setRole} />}
                />
                <Route
                    path="/upload"
                    element={role === "technician" ? <TechnicianUpload logout={logout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/viewer"
                    element={role === "dentist" ? <DentistViewer logout={logout} /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;

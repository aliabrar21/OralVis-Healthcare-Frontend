import { useState } from "react";
import axios from "axios";

export default function TechnicianUpload({ logout }) {
    const [form, setForm] = useState({
        patientName: "",
        patientID: "",
        scanType: "RGB",
        region: "Frontal",
        scanImage: null,
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleFileChange = (e) => setForm({ ...form, scanImage: e.target.files[0] });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(form).forEach(key => formData.append(key, form[key]));
        try {
            await axios.post("http://localhost:5000/api/scans/upload", formData, {
                headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            alert("Scan uploaded successfully");
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="form-container">
            <h2>Upload Scan</h2>
            <button onClick={logout} style={{ float: "right", marginBottom: "10px" }}>Logout</button>
            <form onSubmit={handleSubmit}>
                <input name="patientName" placeholder="Patient Name" onChange={handleChange} />
                <input name="patientID" placeholder="Patient ID" onChange={handleChange} />
                <select name="region" onChange={handleChange}>
                    <option value="Frontal">Frontal</option>
                    <option value="Upper Arch">Upper Arch</option>
                    <option value="Lower Arch">Lower Arch</option>
                </select>
                <input type="file" name="scanImage" accept="image/png, image/jpeg" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
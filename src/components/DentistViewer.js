import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

export default function DentistViewer({ logout }) {
    const [scans, setScans] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/scans", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            .then(res => setScans(res.data))
            .catch(err => console.log(err));
    }, []);

    const generatePDF = (scan) => {
        const doc = new jsPDF();
        doc.text(`Patient Name: ${scan.patientName}`, 10, 10);
        doc.text(`Patient ID: ${scan.patientID}`, 10, 20);
        doc.text(`Scan Type: ${scan.scanType}`, 10, 30);
        doc.text(`Region: ${scan.region}`, 10, 40);
        doc.text(`Upload Date: ${new Date(scan.uploadDate).toLocaleString()}`, 10, 50);
        doc.addImage(scan.imageUrl, 'JPEG', 10, 60, 180, 100);
        doc.save(`Scan-${scan.patientID}.pdf`);
    };

    return (
        <div className="viewer-container">
            <h2>All Scans</h2>
            <button onClick={logout} style={{ float: "right", marginBottom: "10px" }}>Logout</button>
            <div className="scan-grid">
                {scans.map(scan => (
                    <div key={scan._id} className="scan-card">
                        <img src={scan.imageUrl} alt="scan" width="150" />
                        <p>Name: {scan.patientName}</p>
                        <p>ID: {scan.patientID}</p>
                        <p>Type: {scan.scanType}</p>
                        <p>Region: {scan.region}</p>
                        <p>Date: {new Date(scan.uploadDate).toLocaleString()}</p>
                        <button onClick={() => generatePDF(scan)}>Download PDF</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
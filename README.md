# OralVis Healthcare Frontend

> **Note:** The backend is implemented as a separate project. Make sure the backend is running or use the hosted backend URL below.

**Backend URL:** https://github.com/aliabrar21/OralVis-Healthcare-Backend

---

## **Project Overview**

This is the **React frontend** for the OralVis Healthcare Web App. It allows:

* **Technicians** to log in and upload patient scans.
* **Dentists** to log in and view all stored scans with the ability to download per-scan PDF reports.

The frontend communicates with the backend via REST API and handles **role-based routing, authentication, and responsive UI**.

---

## **Tech Stack**

* **React.js** – Frontend framework
* **React Router DOM** – Client-side routing
* **Axios** – API calls
* **jsPDF** – PDF report generation
* **CSS** – Responsive design

---

## **Preconfigured Users**

Use these credentials to log in:

| Role       | Email                                                   | Password  |
| ---------- | ------------------------------------------------------- | --------- |
| Technician | [technician@example.com](mailto:technician@example.com) | Tech\@123 |
| Dentist    | [dentist@example.com](mailto:dentist@example.com)       | Dent\@123 |

> Users are automatically created by the backend.

---

## **Installation & Setup**

1. Clone the repository:

```bash
git clone https://github.com/aliabrar21/OralVis-Healthcare-Frontend
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Update **API URL** in `src/api.js` (or wherever Axios base URL is set):

```js
export const API_URL = "https://oralvis-backend.onrender.com";
```

4. Start the development server:

```bash
npm start
```

* The app will run on `http://localhost:3000`.

---

## **Features**

### **1️⃣ Login**

* Email + Password authentication.
* Redirects to **Upload page** for Technicians and **Viewer page** for Dentists.
* JWT token stored in `localStorage` for session persistence.
* Logout button clears session.

---

### **2️⃣ Technician – Upload Page**

* Form fields:

  * Patient Name
  * Patient ID
  * Scan Type: RGB
  * Region: Frontal / Upper Arch / Lower Arch
  * Scan Image (JPG/PNG)
* Upload sends data to backend and stores image on Cloudinary.
* Form submission includes **timestamp** and image URL.

---

### **3️⃣ Dentist – Scan Viewer Page**

* Displays all stored scans in a responsive grid.
* Shows:

  * Patient Name
  * Patient ID
  * Scan Type
  * Region
  * Upload Date
  * Image Thumbnail
* Each scan has a **Download PDF** button.
* PDF contains scan details and embedded image.

---

### **4️⃣ Responsive Design**

* Works on desktop, tablet, and mobile.
* Uses CSS flex/grid for layout.
* Navigation and buttons adapt to screen size.

---

## **API Endpoints Used**

* **POST `/api/auth/login`** – Login user
* **POST `/api/scans/upload`** – Upload scan (Technician only)
* **GET `/api/scans`** – Fetch all scans (Dentist only)

> Ensure the backend is running or use the hosted backend URL above.

---

## **Author**

Abrar Ali – Full Stack Developer

---

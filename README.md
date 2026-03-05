# 🌱 Crop Recommendation System

![Python](https://img.shields.io/badge/Python-3.9-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

A **full-stack web application** that recommends the best crops to grow based on soil nutrients and environmental conditions.

The system analyzes:

* Nitrogen (N)
* Phosphorus (P)
* Potassium (K)
* Temperature
* Humidity
* pH
* Rainfall

It then suggests the **most suitable crops using a data-driven recommendation algorithm**.

---

# 🚀 Demo

### Crop Recommendation Interface

![Crop Recommendation Demo](images/project-demo.png)


---

# ✨ Features

* 🌾 Crop recommendation based on soil data
* ⚡ FastAPI backend with REST API
* 🌐 React frontend interface
* 📊 Data processing with Pandas & NumPy
* 🔍 Euclidean distance similarity algorithm
* 📡 Real-time frontend–backend communication

---

# 🏗️ Project Architecture

Frontend (React + Vite)
⬇
API Request
⬇
FastAPI Backend
⬇
Crop Recommendation Algorithm
⬇
Agricultural Dataset (crop.csv)

---

# 🛠️ Tech Stack

## Backend

* Python
* FastAPI
* Pandas
* NumPy
* Uvicorn

## Frontend

* React
* Vite
* JavaScript
* HTML / CSS

---

# 📂 Project Structure

```
crop-recommendation-system
│
├── backend
│   ├── main.py
│   ├── crop.csv
│   └── requirements.txt
│
├── src
│
├── public
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```
git clone https://github.com/shashi-1410/crop-recommendation-system.git
cd crop-recommendation-system
```

---

# 🖥️ Backend Setup

```
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

API documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🌐 Frontend Setup

Open a new terminal:

```
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📊 Example Input

```
N = 90
P = 42
K = 43
Temperature = 20
Humidity = 80
pH = 6.5
Rainfall = 200
```

Example Output:

```
Rice
Maize
Chickpea
Kidneybeans
Pigeonpeas
```

---

# 🔮 Future Improvements

* Machine Learning model (Random Forest / KNN)
* Weather API integration
* Crop yield prediction
* Mobile responsive UI
* Cloud deployment

---

# 👨‍💻 Author

**Shashi Kumar**

Computer Science 
Interested in **AI, Machine Learning, and Web Development**

GitHub:
https://github.com/shashi-1410

---

# ⭐ Support

If you like this project, please ⭐ the repository.

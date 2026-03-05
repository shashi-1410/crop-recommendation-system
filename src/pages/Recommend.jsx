import React, { useState } from "react";

function Recommend() {
  const [form, setForm] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const query = new URLSearchParams(form).toString();
    try {
      const res = await fetch(`http://localhost:8000/recommend?${query}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      alert("Error fetching recommendations.");
    }

    setLoading(false);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Crop Recommendation</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {["N", "P", "K", "temperature", "humidity", "ph", "rainfall"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium mb-1">{field}</label>
            <input
              type="number"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            {loading ? "Fetching..." : "Get Recommendation"}
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Recommended Crops:</h3>
          <ul className="space-y-2">
            {results.map((crop, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded shadow">
                <strong>{crop.label}</strong><br />
                N: {crop.N}, P: {crop.P}, K: {crop.K},<br />
                Temp: {crop.temperature}, Humidity: {crop.humidity}, pH: {crop.ph}, Rainfall: {crop.rainfall}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
  );
}

export default Recommend;

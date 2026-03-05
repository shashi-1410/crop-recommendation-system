from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

df = pd.read_csv("crop.csv")

@app.get("/recommend")
def recommend_crop(
    N: int = Query(...),
    P: int = Query(...),
    K: int = Query(...),
    temperature: float = Query(...),
    humidity: float = Query(...),
    ph: float = Query(...),
    rainfall: float = Query(...)
):
    try:
        input_features = np.array([N, P, K, temperature, humidity, ph, rainfall])

        def euclidean(row):
            row_values = row[["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]].values
            return np.sqrt(np.sum((row_values - input_features) ** 2))

        df["distance"] = df.apply(euclidean, axis=1)
        result = df.sort_values(by="distance").head(5).drop(columns="distance")
        return result.to_dict(orient="records")

    except Exception as e:
        print("❌ ERROR:", str(e))
        return {"error": str(e)}

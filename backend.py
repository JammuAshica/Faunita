# from fastapi import FastAPI, UploadFile, File
# from ultralytics import YOLO
# import wikipedia, requests
# import folium
# import uuid
# import os
# from fastapi.responses import FileResponse
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# app = FastAPI()
# model = YOLO("yolov8n.pt")
# INATURALIST_URL = "https://api.inaturalist.org/v1/observations"
# # Allow frontend requests
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# @app.post("/analyze/")
# async def analyze(image: UploadFile = File(...)):
#     # Save uploaded image
#     img_id = uuid.uuid4().hex
#     ext = os.path.splitext(image.filename)[1]
#     img_path = f"temp_{img_id}{ext}"
#     with open(img_path, "wb") as f:
#         f.write(await image.read())

#     # 🧠 Identify animal
#     results = model(img_path)
#     cls_id = results[0].boxes.cls[0].item()
#     animal = results[0].names[cls_id].capitalize()

#     # 📘 Wikipedia info
#     try:
#         summary = wikipedia.summary(animal, sentences=3)
#     except:
#         summary = "No Wikipedia info found."

#     # 📍 iNaturalist locations
#     params = {"q": animal, "per_page": 10, "order_by": "observed_on", "geo": True}
#     resp = requests.get(INATURALIST_URL, params=params).json()
#     coords = [
#         (o["geojson"]["coordinates"][1], o["geojson"]["coordinates"][0])
#         for o in resp.get("results", [])
#         if o.get("geojson")
#     ]

#     # 🗺️ Create map if coords exist
#     map_url = None
#     if coords:
#         m = folium.Map(location=coords[0], zoom_start=2)
#         for lat, lon in coords:
#             folium.Marker([lat, lon], popup=animal).add_to(m)
#         map_path = f"map_{img_id}.html"
#         m.save(map_path)
#         map_url = map_path

#     # Clean up uploaded image
#     os.remove(img_path)

#     return {"animal": animal, "info": summary, "locations": coords, "map": map_url}


# @app.get("/map/{map_filename}")
# async def get_map(map_filename: str):
#     return FileResponse(map_filename, media_type="text/html")
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from ultralytics import YOLO
import shutil
import os

app = FastAPI()

# Allow frontend access (adjust allowed_origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace "*" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load YOLO model
model = YOLO("yolov8n.pt")  # You can replace this with a custom trained model

# Test route
@app.get("/")
def read_root():
    return {"message": "Faunita API is running 🎉"}

# Animal analysis route
@app.post("/analyze/")
async def analyze(file: UploadFile = File(...)):
    # Save uploaded image
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)
    file_path = os.path.join(upload_dir, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run YOLO detection
    results = model(file_path)
    labels = results[0].names
    detected = results[0].boxes.cls

    if len(detected) == 0:
        return JSONResponse(content={"error": "No animal detected"}, status_code=404)

    class_id = int(detected[0].item())
    animal_name = labels[class_id]

    # You can expand this with a real animal info DB
    animal_info = {
        "name": animal_name,
        "habitat": "Example habitat",
        "location_found": "Example location",
        "description": f"{animal_name} is an interesting animal. (You can add real info here.)"
    }

    return animal_info

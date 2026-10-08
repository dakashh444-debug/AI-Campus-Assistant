from fastapi import FastAPI

app = FastAPI(
    title="AI Campus Assistant",
    description="AI-powered academic and administrative assistant",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "AI Campus Assistant API is running",
        "status": "success"
    }
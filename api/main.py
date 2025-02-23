
from fastapi import FastAPI
from router.openai import router as openai_router
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.include_router(openai_router)

#设置跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True, 
)



@app.get("/")
async def read_root():
    return {"Hello": "World"}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000)

    



from openai import OpenAI
from config import settings

client = OpenAI(
    api_key=settings.openai_api_key,
    base_url=settings.openai_base_url,    
)

model = "moonshot-v1-32k"
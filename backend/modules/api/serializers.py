from pydantic import BaseModel
from typing import List, Tuple


class DataInterface(BaseModel):
    faces: List[Tuple[int,int,int,int]]
    age:str
    gender:str
    age_confidence: float
    gender_confidence: float
    
    class Config:
        schema_extra = {
            "example": {
                "faces": "[(int,int,int,int)]",
                "age":"20-30",
                "gender":"male",
                "age_confidence": 90.0,
                "gender_confidence": 100.0,
            }
        }
        
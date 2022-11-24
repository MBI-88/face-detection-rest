from pydantic import BaseModel
from typing import List, Tuple


class DataInterface(BaseModel):
    faces: List[Tuple[int,int,int,int]]
    
    class Config:
        schema_extra = {
            "example": {
                "faces": "[(int,int,int,int)]"
            }
        }
        
from pydantic import BaseModel
from typing import List, Dict, Tuple


class Face(BaseModel):
    data: List[
        Dict[str, Tuple[int, int, int, int] | str | float] | None
    ]

    class Config:
        schema_extra = {
            "example": {
                'data': [
                    {
                        'area': (10, 80, 10, 80),
                        'age': '25-35',
                        'age_confi': 95.0,
                        'gender': 'male',
                        'gender_conf': 98.99
                    }
                ]
            }
        }

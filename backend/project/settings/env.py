from pydantic import BaseSettings
from typing import List

# Extract env variables


class BaseEnv(BaseSettings):
    origins: List[str]
    credentials: bool
    hash_key: str

    class Config:
        env_file = '.env'

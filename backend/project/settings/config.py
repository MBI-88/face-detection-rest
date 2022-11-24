from pydantic import BaseSettings
from typing import List

# Extract env variables


class BaseEnv(BaseSettings):
    ORIGINS: str
    CREDENTIALS: bool
    HASH_KEY: str
    DEBUG: bool
    PORT_APP: int
    HOST_APP: str

    class Config:
        env_file = '.env_backend'

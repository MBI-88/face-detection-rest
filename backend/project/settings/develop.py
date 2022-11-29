from .config import BaseEnv
from functools import lru_cache
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

# Cache settings

@lru_cache
def get_config() -> BaseEnv:
    return BaseEnv()


# Debug mode

DEBUG = True

# Hash Key

HASH_KEY = "FastApi-weak-password"

# MIDDLEWARE

# Host 

ORIGINS = ["*"]

# Headers 

HEADERS = [
    "Accept-Encoding","Accept-Patch",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Header",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Authorization","Connection",
    "Content-Length","Content-Location",
    "Cookie","Host","Location",
    "Proxy-Authentication","Set-Cookie",
    "X-Content-Type-Options","X-Frame-Options",
    "X-XSS-Protection"
]

# Credentials (Cookie Cross Origin)

CREDENTIALS = True

# Methods 

METHODS = ['GET','POST'] 

# Host

HOST_APP = 'localhost'

# PORT

PORT_APP = 8000

# Allow hosts

ALLOWED_HOSTS = ['*']
















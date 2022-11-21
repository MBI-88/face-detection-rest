from env import BaseEnv
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

settings = BaseEnv()

# MIDDLEWARE

# Host 

origins = settings.origins

# Headers 

headers = [
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

credentials = True

# Methods 

methods = ['GET','POST']

# Data Base











from fastapi import FastAPI
import base


# Settings 

settings = base.get_config()

# Hash password

HASH_KEY = settings.HASH_KEY

# Origins

ORIGINS = [origin for origin in settings.ORIGINS.split(',')]

# HOST APP

HOST_APP = settings.HOST_APP

# PORT APP

PORT_APP = settings.PORT_APP

# App 

app = FastAPI(debug=settings.DEBUG,description="Rest application for detection of faces")

# Middleware

app.add_middleware(
    base.CORSMiddleware, 
    base.TrustedHostMiddleware,
    base.GZipMiddleware,
    allow_headers=base.HEADERS,
    allow_methods=base.METHODS,
    allow_origins=base.ORIGINS,
    allow_credentials=base.CREDENTIALS
)

# Data base
import base
from fastapi import FastAPI

# Develop settings

app = FastAPI(debug=True)

# Middleware

app.add_middleware(
    base.CORSMiddleware,
    allow_headers=base.HEADERS,
    allow_methods=base.METHODS,
    allow_origins=base.ORIGINS,
    allow_credentials=base.CREDENTIALS
)

# HOST APP

HOST_APP = "localhost"

# PORT APP

PORT_APP = 8000

# Data base


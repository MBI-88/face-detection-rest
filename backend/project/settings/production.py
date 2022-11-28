from .base import (
    get_config, GZipMiddleware, CORSMiddleware,
    TrustedHostMiddleware, CREDENTIALS, METHODS,
    HEADERS
)


# Settings

settings = get_config()

# Hash password

HASH_KEY = settings.HASH_KEY

# Origins

ORIGINS = [origin for origin in settings.ORIGINS.split(',')]

# HOST APP

HOST_APP = settings.HOST_APP

# PORT APP

PORT_APP = settings.PORT_APP


# Data base

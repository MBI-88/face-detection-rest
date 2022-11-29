from .develop import (get_config, HEADERS, GZipMiddleware,
                    TrustedHostMiddleware, CORSMiddleware)


# Settings

settings = get_config()

DEBUG = settings.DEBUG

# Hash password

HASH_KEY = settings.HASH_KEY

# Origins

ORIGINS = [origin for origin in settings.ORIGINS.split(',')]

# HOST APP

HOST_APP = settings.HOST_APP

# PORT APP

PORT_APP = settings.PORT_APP

# Credentials

CREDENTIALS = settings.CREDENTIALS

# Allowed methods

METHODS = [method for method in settings.METHODS.split(',')]

# Allowed_hosts 

ALLOWED_HOSTS = [host for host in settings.ALLOW_HOSTS.split(',')]

# Data base

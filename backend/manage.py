from argparse import ArgumentParser, RawDescriptionHelpFormatter
import textwrap
import subprocess
import uvicorn as server
from fastapi import FastAPI
from modules.face_detection.views import route


# Application

app = FastAPI(description="Application for face detection")

app.include_router(router=route, tags=["Websocket"])


if __name__ == "__main__":
    command = ArgumentParser(
        description=textwrap.dedent(
            """
    -------------------------------------------------------------
    This application is done for detecting face using an endpoint
    with FastApi backent and  React frontend
    -------------------------------------------------------------
    """
        ), prefix_chars='--', formatter_class=RawDescriptionHelpFormatter
    )
    command.add_argument('argument', type=str, nargs='?',
                         help="""run test shell database""")
    command.add_argument('-s', '--settings', type=str,
                         help="Import local settings to run the application")
    command.add_argument('-P', '--port', type=int,
                         help="Port to run the application")
    command.add_argument('-H', '--host', type=str,
                         help="Host to run the application")
    command.add_argument('-f', '--file', type=str,
                         help="File to open in shell")
    selection = command.parse_args()

    match (selection.argument):
        case ('runserver'):
            # Run server

            if selection.settings == 'production':
                from project.settings.production import (
                    TrustedHostMiddleware, GZipMiddleware,
                    CORSMiddleware, HEADERS, ORIGINS, HOST_APP, PORT_APP,
                    CREDENTIALS, DEBUG, METHODS, ALLOWED_HOSTS
                )

                app.debug = DEBUG
                host = HOST_APP
                port = PORT_APP

                # Production Middleware

                app.add_middleware(CORSMiddleware, allow_headers=HEADERS, allow_origins=ORIGINS,
                                   allow_credentials=CREDENTIALS, allow_methods=METHODS)
                app.add_middleware(TrustedHostMiddleware,
                                   allowed_hosts=ALLOWED_HOSTS)
                app.add_middleware(GZipMiddleware, minimum_size=1000)

            else:
                from project.settings.develop import (
                    CORSMiddleware, ORIGINS, CREDENTIALS, METHODS, HEADERS,
                    HOST_APP, PORT_APP, ALLOWED_HOSTS, DEBUG)

                app.debug = DEBUG
                host = HOST_APP
                port = PORT_APP

                # Develop middleware

                app.add_middleware(CORSMiddleware, allow_headers=HEADERS, allow_origins=ORIGINS,
                                   allow_credentials=CREDENTIALS, allow_methods=METHODS)

            if selection.host:
                host = selection.host
            if selection.port:
                port = selection.port

            print(f"[+] Runing server debug mode {app.debug}")
            server.run('manage:app', host=host,
                       port=port, reload=True, workers=4)

        case ('tests'):
            # Test mode

            if selection.file:
                print("[+] Runing tests...")
                subprocess.run(['pytest', f"{selection.file}"])
                
            else:
                print("[-] File not found")

        case ('database'):
            # Database mode

            print(
                f"[-] This project don't use database action taken {selection.argument}")

        case ('shell'):
            # Shell mode

            print("[+] Runing shell...")
            if selection.file:
                subprocess.run(['python', f"< {selection.file}"])
                
            subprocess.run(["python"])

        case _:
            # Default

            print("[-] Command not reconized")
            exit(0)

from argparse import ArgumentParser, RawDescriptionHelpFormatter, Namespace
import textwrap
import subprocess
import uvicorn as server
from fastapi import FastAPI
from modules.face_detection.views import route


app = FastAPI(description="Application for face detection")


class Commands(ArgumentParser):
    description: str | None = textwrap.dedent(
        """
    -------------------------------------------------------------
    This application is done for detecting face using an endpoint
    with FastApi backent and  React frontend
    -------------------------------------------------------------
    """
    )

    formatter_class: object = RawDescriptionHelpFormatter
    prefix_chars: str = '--'
    host: str
    port: int

    def __init__(self) -> None:
        super().__init__(description=self.description,
                         formatter_class=self.formatter_class, prefix_chars=self.prefix_chars)

    def exec_commands(self, action: Namespace) -> None:
        match (action.option):
            case ('runserver'):  # Run server
                if action.settings == 'production':
                    from project.settings.production import (
                        GZipMiddleware, CORSMiddleware,
                        TrustedHostMiddleware, CREDENTIALS, ORIGINS, METHODS,
                        HEADERS, HASH_KEY, HOST_APP, PORT_APP,
                    )

                    app.debug = False
                    self.host = HOST_APP
                    self.port = PORT_APP
                    app.add_middleware(
                        GZipMiddleware, CORSMiddleware, TrustedHostMiddleware,
                        allow_origins=ORIGINS,
                        allow_methods=METHODS,
                        allow_credentials=CREDENTIALS,
                        allow_headers=HEADERS
                    )

                else:
                    from project.settings.develop import (
                        CORSMiddleware, HEADERS, ORIGINS, CREDENTIALS, METHODS, HOST_APP, PORT_APP
                    )
                    app.debug = True
                    self.host = HOST_APP
                    self.port = PORT_APP
                    app.add_middleware(
                        CORSMiddleware,
                        allow_origins=ORIGINS,
                        allow_methods=METHODS,
                        allow_credentials=CREDENTIALS,
                        allow_headers=HEADERS
                    )

                if action.host:
                    self.host = action.host
                if action.port:
                    self.port = action.port

                app.include_router(router=route, prefix="/ws",
                                   tags=["Websocket"])
                print("[+] Runing server...")
                server.run('manage:app', host=self.host,
                           port=self.port, reload=True)

            case ('tests'):  # Test mode
                if action.file:
                    print("[+] Runing tests...")
                    subprocess.run(['pytest', f"{action.file}"])
                else:
                    print("[-] File not found")

            case ('database'):  # Database mode
                print(
                    f"[-] This project don't use database action taken {action.option}")

            case ('shell'):  # Shell mode
                print("[+] Runing shell...")
                if action.file:
                    subprocess.run(['python', f"< {action.file}"])
                subprocess.run(["python"])

            case _:
                print("[-] Command not reconized")
                exit(0)


if __name__ == "__main__":
    command = Commands()
    command.add_argument('option', type=str, nargs='?',
                         help="""run test shell database""")
    command.add_argument('-s', '--settings', type=str,
                         help="Import local settings to run the application")
    command.add_argument('-P', '--port', type=int,
                         help="Port to run the application")
    command.add_argument('-H', '--host', type=str,
                         help="Host to run the application")
    command.add_argument('-f', '--file', type=str,
                         help="File to open in shell")
    command.exec_commands(command.parse_args())

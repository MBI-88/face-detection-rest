from argparse import ArgumentParser, RawDescriptionHelpFormatter, Namespace
import textwrap
import subprocess
import uvicorn as server
from modules.api.views import api


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
    host: str = 'localhost'
    port: int = 8000

    def __init__(self) -> None:
        super().__init__(description=self.description,
                         formatter_class=self.formatter_class, prefix_chars=self.prefix_chars)

    def exec_commands(self, action: Namespace) -> None:
        match (action.option):
            case ('runserver'):  # Run server
                if action.settings == 'production':
                    from project.settings.production import app
                else:
                    from project.settings.develop import app

                if action.host:
                    self.host = action.host
                if action.port:
                    self.port = action.port

                app.include_router(router=api,prefix="/",tags=["Websocket"])
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

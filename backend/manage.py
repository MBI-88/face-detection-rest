from argparse import ArgumentParser, RawDescriptionHelpFormatter, Namespace
import uvicorn as server 
import pytest as test 


class Commands(ArgumentParser):
    description: str | None = """
    This application is done for detecting face using an endpoint
    with a fronted 
    """
    epilog: str | None 
    formatter_class: object = RawDescriptionHelpFormatter
    prefix_chars: str = '--'
    host:str = 'localhost'
    port:int = 8000
    
    def exec_commands(self,action:Namespace) -> None:
        match (action.option):
            case ('runserver'): # Run server
                if action.settings == 'production':
                    from project.settings.production import app
                else:
                    from project.settings.develop import app 
                
                if action.host: self.host = action.host
                if action.port: self.port = action.port

                #server.run('manage:app',host=self.host,port=self.port,reload=True)
                
            case ('tests'): # Test mode
                print(action.option," ",action.settings)
                pass
            case ('database'): # Database mode
                pass 
            
            case ('shell'): # Shell mode
                pass 
    
    

if __name__ == "__main__":
    command = Commands()
    command.add_argument('option',type=str,nargs='?')
    command.add_argument('-s','--settings',type=str)
    command.add_argument('-P','--port',type=int)
    command.add_argument('-H','--host',type=str)
    command.exec_commands(command.parse_args())
    
   
    
    
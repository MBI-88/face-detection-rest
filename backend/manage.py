from argparse import ArgumentParser, RawDescriptionHelpFormatter, _FormatterClass, Action
from typing import List

class Commands(ArgumentParser):
    description: str | None = """
    This application is done for detecting face using an endpoint
    with a fronted 
    """
    epilog: str | None 
    formatter_class: _FormatterClass = RawDescriptionHelpFormatter
    prefix_chars: str = '--'
    
    
    def selected_action(self,action:List[str]) -> None:
        match (action[0]):
            case ('develop'): # Develop mode
                pass
            case ('production'): # Producton mode
                pass
            case ('tests'): # Testing mode
                pass 
    
    def add_argument(self, *name_or_flags: str,) -> Action:
        return super().add_argument(*name_or_flags)
                
    
    




if __name__ == "__main__":
    command = Commands()
   
    
    
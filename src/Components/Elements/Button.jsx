import {Button as MButton} from "@mui/material";



 function Button({title, handleAction}) {
  return (
    
          <MButton variant="contained"
          onClick={handleAction}
          >
            {title}
          </MButton>
        
  );
}

export default Button;

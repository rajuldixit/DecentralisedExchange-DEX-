import { Dialog, DialogTitle, List, ListItem, Typography } from "@mui/material";
import tokenList from "../../../tokenList.json";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const CustomDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: any) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Tokens</DialogTitle>
      <List sx={{ padding: "8px 24px" }}>
        {tokenList.map((token) => (
          <ListItem
            sx={{
              cursor: "pointer",
              "&:hover": {
                borderRadius: "16px",
                backgroundColor: "#bed6e0",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white"
                }
              }
            }}
            onClick={() => handleListItemClick(token)}
          >
            <img
              src={token.img}
              alt="token-img"
              style={{ width: "16px", height: "16px", marginRight: "20px" }}
            />
            <Typography>{token.symbol}</Typography>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default CustomDialog;

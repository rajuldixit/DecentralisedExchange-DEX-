import { Button, Stack, TextField } from "@mui/material";
import "../style.css";
import { useEffect, useState } from "react";
import CustomDialog from "../../Shared/CustomDialog";

const CustomTextField = ({
  token,
  isDisabled,
  ontextFieldChange,
  selectedToken,
  tokenAmount
}: any) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(token);

  const handleClose = (value: string) => {
    setOpenDialog(false);
    setSelectedValue(value);
    selectedToken(value);
  };
  return (
    <>
      {token && (
        <Stack className="text-field-wrap">
          <TextField
            variant="standard"
            placeholder="enter"
            size="small"
            fullWidth
            disabled={isDisabled}
            InputProps={{ style: { color: "#fff" }, disableUnderline: true }}
            sx={{
              border: "none",
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#fff"
              }
            }}
            onChange={ontextFieldChange}
            value={tokenAmount ? tokenAmount : 0}
          />
          <Button
            variant="outlined"
            sx={{ borderRadius: "18px", width: "100px" }}
            startIcon={
              <img
                src={token.img}
                alt="token-image"
                style={{ width: "16px", height: "16px" }}
              />
            }
            onClick={() => setOpenDialog(!openDialog)}
          >
            {token.symbol}
          </Button>
          <CustomDialog
            selectedValue={selectedValue}
            open={openDialog}
            onClose={handleClose}
          />
        </Stack>
      )}
    </>
  );
};

export default CustomTextField;

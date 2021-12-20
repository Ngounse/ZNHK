import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styled from "styled-components";
const Charts = React.memo(() => {
  const [add, setAdd] = React.useState(0);
  //   const [state1, setState1] = React.useState(false);
  const handleClick = () => {
    setAdd(add + 1);
  };
  console.log("state::::", add);
  return (
    <div>
      <Typography variant="h1">{add}</Typography>
      <Button size="large" variant="contained" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
});

export default Charts;

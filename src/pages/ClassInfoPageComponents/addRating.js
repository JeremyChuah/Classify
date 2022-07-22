import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#F4ccac",
      contrastText: "#fff",
    },
  },
});

const Input = styled(MuiInput)`
  width: 42px;
`;

const initialValues = {
  id: "",
  enjoyment: 0,
  difficulty: 0,
  load: 0.0,
  homework: 0,
};

function AddRating(props) {
  const [values, setValues] = useState(initialValues);

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.difficulty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p>Class Enjoyment</p>
          <div className="flex flex-row">
            <Slider
              name="difficulty"
              value={values.difficulty}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            <Input
              name="difficulty"
              value={values.difficulty}
              size="small"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" type="submit">
            Save
          </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}

export default AddRating;

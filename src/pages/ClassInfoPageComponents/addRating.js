import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { API } from "aws-amplify";
import { updateClass } from "../../graphql/mutations";
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
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.enjoyment = values.enjoyment > 0 ? "" : "Please Enter a Rating";
    temp.difficulty = values.difficulty > 0 ? "" : "Please Enter a Rating";
    temp.load = values.load > 0 ? "" : "Please Enter a Rating";
    temp.homework = values.homework > 0 ? "" : "Please Enter a Number";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await API.graphql({
    //   query: updateClass,
    //   variables: {
    //     input: {
    //       id: "oncwkcnwokcw",
    //       enjoyment: Number(values.enjoyment) + Number(props.enjoyment),
    //       difficulty: Number(values.difficulty) + Number(props.difficulty),
    //       load: Number(values.load) + Number(props.load),
    //       homework: Number(values.homework) + Number(props.homework),
    //     },
    //   },
    // });
    if (validate()) {
      props.onAddRating();
      setValues([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="font-bold mb-5">Enter Value over 0</p>
        <div>
          <p>Class Enjoyment</p>
          <div className="flex flex-row">
            <Slider
              name="enjoyment"
              value={values.enjoyment}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            <Input
              name="difficulty"
              value={values.enjoyment}
              size="small"
              onChange={handleInputChange}
              {...(errors.enjoyment && {
                error: true,
              })}
            />
          </div>
        </div>
        <div>
          <p>Course Difficulty</p>
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
              {...(errors.difficulty && {
                error: true,
              })}
            />
          </div>
        </div>
        <div>
          <p>Course Load</p>
          <div className="flex flex-row">
            <Slider
              name="load"
              value={values.load}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            <Input
              name="difficulty"
              value={values.load}
              size="small"
              onChange={handleInputChange}
              {...(errors.load && {
                error: true,
              })}
            />
          </div>
        </div>
        <div className="mb-3">
          <p>Homework(hours)</p>
          <div className="flex flex-row">
            <Slider
              name="homework"
              value={values.homework}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            <Input
              name="difficulty"
              value={values.homework}
              size="small"
              onChange={handleInputChange}
              {...(errors.homework && {
                error: true,
              })}
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

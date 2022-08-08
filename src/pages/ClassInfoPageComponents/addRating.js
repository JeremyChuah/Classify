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
      main: "#1E2F4F",
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
    temp.enjoyment = values.enjoyment >= 0 ? "" : "Please Enter a Rating";
    temp.difficulty = values.difficulty >= 0 ? "" : "Please Enter a Rating";
    temp.load = values.load >= 0 ? "" : "Please Enter a Rating";
    temp.homework = values.homework >= 0 ? "" : "Please Enter a Number";
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
    if (validate()) {
      await API.graphql({
        query: updateClass,
        variables: {
          input: {
            id: props.id,
            enjoyment: Number(values.enjoyment) + Number(props.enjoyment),
            difficulty: Number(values.difficulty) + Number(props.difficulty),
            load: Number(values.load) + Number(props.load),
            homework: Number(values.homework) + Number(props.homework),
            entries: Number(props.entries) + 1,
          },
        },
      });
      console.log(props.enjoyment);
      console.log(values);
      setErrors({});
      props.onAddRating();
      setValues([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p>Class Enjoyment</p>
          <div className="flex flex-row">
            <Slider
              max={10}
              name="enjoyment"
              value={values.enjoyment || 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            {/* <Input
              name="enjoyment"
              value={values.enjoyment}
              size="small"
              onChange={handleInputChange}
              {...(errors.enjoyment && {
                error: true,
              })}
            /> */}
            <div>{values.enjoyment}</div>
          </div>
        </div>
        <div>
          <p>Course Difficulty</p>
          <div className="flex flex-row">
            <Slider
              max={10}
              name="difficulty"
              value={values.difficulty || 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            {/* <Input
              name="difficulty"
              value={values.difficulty || 0}
              size="small"
              onChange={handleInputChange}
              {...(errors.difficulty && {
                error: true,
              })}
            /> */}
            <div>{values.difficulty}</div>
          </div>
        </div>
        <div>
          <p>Course Load</p>
          <div className="flex flex-row">
            <Slider
              max={10}
              name="load"
              value={values.load || 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            {/* <Input
              name="load"
              value={values.load || 0}
              size="small"
              onChange={handleInputChange}
              {...(errors.load && {
                error: true,
              })}
            /> */}
            <div>{values.load}</div>
          </div>
        </div>
        <div className="mb-3">
          <p>Homework (Hours per week)</p>
          <div className="flex flex-row">
            <Slider
              max={10}
              name="homework"
              value={values.homework || 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="mr-5"
            />
            {/* <Input
              name="homework"
              value={values.homework || 0}
              size="small"
              onChange={handleInputChange}
              {...(errors.homework && {
                error: true,
              })}
            /> */}
            <div>{values.homework}</div>
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

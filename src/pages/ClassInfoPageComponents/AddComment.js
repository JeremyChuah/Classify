import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { v4 } from "uuid";
import { API } from "aws-amplify";
import { createComment } from "../../graphql/mutations.js";

const initialValues = {
  classID: "",
  id: "",
  subject: "",
  content: "",
};

const theme = createTheme({
  palette: {
    neutral: {
      main: "#1E2F4F",
      contrastText: "#fff",
    },
  },
});

function AddComment(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let temp = {};
    temp.subject = values.subject ? "" : "This Field is Required.";
    temp.content = values.content ? "" : "Within character limit please";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await API.graphql({
        query: createComment,
        variables: {
          input: {
            id: v4(),
            content: values.content,
            subject: values.subject,
            classID: props.id,
          },
        },
      });
      props.onAddComment();
      setValues(initialValues);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="outlined"
          label="Comment Subject"
          value={values.subject}
          style={{ margin: "1rem" }}
          name="subject"
          onChange={handleInputChange}
          {...(errors.subject && {
            error: true,
            helperText: errors.subject,
          })}
        />
        <TextField
          variant="outlined"
          label="Comment Content"
          type="text"
          name="content"
          size="medium"
          style={{ margin: "1rem" }}
          value={values.content}
          multiline="true"
          rows={8}
          onChange={handleInputChange}
          {...(errors.content && {
            error: true,
            helperText: errors.content,
          })}
          inputProps={{
            maxlength: 275,
          }}
          helperText={`${values.content.length}/${275}`}
        />
        <br />
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" type="submit">
            Save
          </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}

export default AddComment;

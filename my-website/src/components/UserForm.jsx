import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { mobile, tablet, iphone } from "../responsive";
const Container = styled.div``;
const Form = styled.form`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 50px 10px 10px 20px;
  margin: 10%;
  height: 659px;
  flex-wrap: wrap;
  background-color: #a6b1f0;
  ${tablet({ height: "650px" })}
  ${iphone({ height: "680px", padding: "1px", margin: "5%" })}
  ${mobile({ height: "700px", margin: "10px", padding: "5px" })}
`;

const Title = styled.h2`
  text-align: center;
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const UserForm = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update screenWidth on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const [opens, setOpens] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpens(false);
  };

  const [error, setError] = useState("");

  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}$/;
    if (inputs.fname.length == 0) {
      setError("please enter  first name");
      setOpens(true);
    } else if (inputs.lname == 0) {
      setError("please enter lname name");
      setOpens(true);
    } else if (inputs.email.match(emailPattern)) {
      if (inputs.phone.match(phonePattern)) {
        try {
          let res = await axios.post("https://my-portfolio-gamma-sandy.vercel.app/feedback", inputs);
          if (res) {
            handleClick();
          }
        } catch (err) {
          setError(err.response.data);
          setOpens(true);
        }
      } else {
        setError("please enter valid phone");
        setOpens(true);
      }
    } else {
      setError("please enter valid email");
      setOpens(true);
    }
  };

  let size =
    screenWidth <= 400
      ? { m: 1, width: "25ch", marginLeft: "20px" }
      : screenWidth <= 800
      ? { m: 1, width: "80%", marginLeft: "50px" }
      : { m: 1, width: "80%", marginLeft: "30px" };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title> Your Details</Title>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": size,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="First-Name"
            name="fname"
            onChange={handleChange}
          />

          <TextField
            required
            id="outlined-required"
            label="Last-Name"
            name="lname"
            onChange={handleChange}
          />

          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />

          <TextField
            required
            id="outlined-required"
            label="Phone"
            type="number"
            defaultValue=" your phone"
            name="phone"
            onChange={handleChange}
          />

          <TextField
            id="outlined-multiline-static"
            label="your message"
            multiline
            rows={4}
            name="message"
            onChange={handleChange}
          />
        </Box>

        <Stack spacing={2} sx={size}>
          <Button variant="outlined" type="submit">
            Submit Now
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "80%" , fontSize : '25px' }}
            >
              your message Submitted successfully!
            </Alert>
          </Snackbar>
          <Snackbar open={opens} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "80%" }}
            >
              {error}!
            </Alert>
          </Snackbar>
        </Stack>
      </Form>
    </Container>
  );
};

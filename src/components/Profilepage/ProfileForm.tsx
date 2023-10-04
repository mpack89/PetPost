import { Formik, Field, Form, FormikHelpers } from "formik";
import React from "react";
import { Grid, Typography } from "@mui/material";
import "./ProfileForm.css";

interface Values {
  petName: string;
  ownerName: string;
  bio: string;
  links: string;
}

const ProfileForm = () => {
  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          margin: 4,
          fontFamily: "serif",
          fontStyle: "bold",
          fontSize: 24,
          marginTop: 0,
        }}
      >
        Edit Profile
      </Typography>
      <Formik
        initialValues={{
          petName: "",
          ownerName: "",
          bio: "",
          links: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            localStorage.setItem("form", JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <Grid container direction={"column"} columnSpacing={4} rowSpacing={4}>
            <Grid item xs={4}>
              <label id="label" htmlFor="petName">
                Pet
              </label>
              <Field id="petName" name="petName" placeholder="" />
            </Grid>
            <Grid item xs={4}>
              <label id="label" htmlFor="ownerName">
                Owner
              </label>
              <Field id="ownerName" name="ownerName" placeholder="" />
            </Grid>
            <Grid item xs={4}>
              <label id="label" htmlFor="bio">
                Bio
              </label>
              <Field id="bio" name="bio" placeholder="" />
            </Grid>
            <Grid item xs={4}>
              <label id="label" htmlFor="links">
                Links
              </label>
              <Field id="links" name="links" placeholder="" />
            </Grid>
            <Grid item xs={4} alignSelf={"center"}>
              <button id="submitbutton" type="submit">
                Submit
              </button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileForm;

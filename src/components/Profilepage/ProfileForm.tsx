import { Formik, Field, Form, FormikHelpers } from "formik";
import React from "react";
import { Grid, Typography } from "@mui/material";
import "./ProfileForm.css";
import { useState } from "react";

interface Values {
  petName: string;
  ownerName: string;
  bio: string;
  links: string;
}

const ProfileForm = (props: any, propfunction: any) => {
  const [profileInfo, setprofileInfo] = useState(props);

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
        initialValues={profileInfo}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          propfunction([values]);

          setSubmitting(false);
        }}
      >
        <Form>
          <Grid container direction={"column"} columnSpacing={4} rowSpacing={4}>
            <Grid item xs={4}>
              <label id="label" htmlFor="petName">
                Pet
              </label>
              <Field id="pet" name="pet" />
            </Grid>
            <Grid item xs={4}>
              <label id="label" htmlFor="ownerName">
                Owner
              </label>
              <Field id="owner" name="owner" placeholder="" type="text" />
            </Grid>
            <Grid item xs={4}>
              <label id="label" htmlFor="bio">
                Bio
              </label>
              <Field
                id="bio"
                name="bio"
                placeholder=""
                value={profileInfo.bio}
              />
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

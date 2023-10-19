import { Formik, Field, Form, FormikHelpers } from "formik";
import { useEffect } from "react";
import React from "react";
import { Grid, Typography } from "@mui/material";
import "./ProfileForm.css";
import { setMyProfile } from "../../API/setter";
import { Profile } from "../../API/profileAPI";

interface Values {
  profile: Profile;
  setIsEditing: any;
}

const ProfileForm = (props: any) => {
  const { profile, setIsEditing } = props;
  const itemData = profile;
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
        initialValues={itemData}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setMyProfile(values);
          setSubmitting(false);
          setIsEditing(false);
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
              <Field id="bio" name="bio" placeholder="" type="text" />
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

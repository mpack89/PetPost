import React from "react";

const ProfileForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="pet-name" className="form-label">
          Pet
        </label>
        <input id="pet" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="owner-name" className="form-label">
          Owner
        </label>
        <input id="owner" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="bio" className="form-label">
          Bio
        </label>
        <input id="bio" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="links" className="form-label">
          Links
        </label>
        <input id="links" type="text" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;

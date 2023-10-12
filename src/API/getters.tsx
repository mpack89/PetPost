export const getMyProfile: any = () => {
  const raw = localStorage.getItem("UPDATE_PROFILE")
    ? localStorage.getItem("UPDATE_PROFILE")
    : "";
  return JSON.parse("");
};

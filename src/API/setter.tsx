export const setMyProfile: any = (data: any) => {
  localStorage.setItem("UPDATE_PROFILE", JSON.stringify(data));
};

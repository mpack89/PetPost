export const setMyProfile: any = (data: any) => {
  localStorage.setItem("USER_PROFILE", JSON.stringify(data));
};

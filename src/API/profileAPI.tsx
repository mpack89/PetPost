export interface Profile {
  pet: string;
  owner: string;
  bio: string;
  links?: string;
}

export const setMyProfile: any = (data: any) => {
  localStorage.setItem("UPDATE_PROFILE", JSON.stringify(data));
};

export const getMyProfile: any = () => {
  const raw = localStorage.getItem("UPDATE_PROFILE") || "";
  return JSON.parse(raw);
};

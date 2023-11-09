export const getMyCommentsByImage: any = () => {
  fetch("https://my.api.mockaroo.com/comment.json?key=88249510", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88249510",
      "X-RapidAPI-Host": "https://my.api.mockaroo.com/comment.json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};

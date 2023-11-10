export const getMyCommentsByImage = async () => {
  try {
    const response = await fetch(
      "https://my.api.mockaroo.com/comment.json?key=88249510",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "88249510",
          "X-RapidAPI-Host": "https://my.api.mockaroo.com/comment.json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    return data[0];
  } catch (error) {
    console.error(error);
  }
};

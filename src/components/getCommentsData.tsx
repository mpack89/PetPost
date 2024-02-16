import { useState, useEffect } from "react";

const getCommentsData = () => {
  const getMyCommentsByImage = async () => {
    try {
      const response = await fetch(
        "https://api.mockaroo.com/api/e86e5a40?count=96&key=88249510",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "88249510",
            "X-RapidAPI-Host": "https://my.api.mockaroo.com/comment.json",
          },
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const storeCommentsInLocalStorage = (comments) => {
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyCommentsByImage();
        const UserComments = response;
        setComments(UserComments);

        storeCommentsInLocalStorage(UserComments);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  return { comments, error };
};

export default getCommentsData;

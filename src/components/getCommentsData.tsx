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

  const [comments, setComments] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyCommentsByImage();
<<<<<<< Updated upstream
        const fourComments = response;
        setComments(fourComments);
=======
        const updatedComments = response; // Replace with your logic to filter, update, etc.
        setComments(updatedComments);

        // Update local storage whenever comments change
        storeCommentsInLocalStorage(updatedComments);
>>>>>>> Stashed changes
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Only run on mount, you can add dependencies if needed

  return { comments, error, updateComments: storeCommentsInLocalStorage };
};

export default getCommentsData;

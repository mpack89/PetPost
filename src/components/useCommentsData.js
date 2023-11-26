import { useState, useEffect } from "react";

const useCommentsData = () => {
  const getMyCommentsByImage = async () => {
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

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyCommentsByImage();
        const fourComments = response.slice(0, 4);
        setComments(fourComments);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { comments, loading, error };
};

export default useCommentsData;

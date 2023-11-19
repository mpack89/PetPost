import { useState, useEffect } from "react";
import { getMyCommentsByImage } from "../API/commentsAPI";

const useCommentsData = () => {
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

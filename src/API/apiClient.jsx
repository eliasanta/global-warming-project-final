import { useEffect, useState } from "react";
import axios from "axios";

function useClientApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        /* if (!(Object.entries(response).length === 0)) {
          console.log(Object.entries(response).length);
          
        } */
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error };
}

export default useClientApi;

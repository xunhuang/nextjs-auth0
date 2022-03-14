import { useEffect, useState } from 'react';

const useAccessToken = () => {
  const [data, setData] = useState(null);
  const url = '/api/my/getAccessToken';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.accessToken))
      .catch((err) => console.log(`Error: ${err}`));
  }, [url]);

  return { accessToken: data };
};

export default useAccessToken;

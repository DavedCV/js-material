import { useState, useEffect } from "react";

// custom hook that handles the fetching
function useImageURL() {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
}

export default function Fetching() {
  const { imageURL, error, loading } = useImageURL();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>An Image!</h1>
      <img src={imageURL} alt="placeholder text" />
    </div>
  );
}

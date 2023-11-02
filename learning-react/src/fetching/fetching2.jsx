import { useEffect, useState } from "react";

function useFetchPromiseSyntax() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setData(null);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}

function useFetchAsyncFunctionSyntax() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=8",
        );

        if (!response.ok)
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );

        const data = await response.json();

        setData(data);
        setError(null);
      } catch (e) {
        setData(null);
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, error, loading };
}

export default function Fetching() {
  const { data, error, loading } = useFetchAsyncFunctionSyntax();

  return (
    <div className="fetch">
      <h1>API posts</h1>

      {loading && <p>Loading...</p>}
      {error && <div>console.error();</div>}

      {data && (
        <ul style={{ listStyle: "none" }}>
          {data.map(({ id, title }) => (
            <li key={id} style={{ margin: "5px", border: "2px solid blue" }}>
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

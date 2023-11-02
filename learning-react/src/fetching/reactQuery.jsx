import { useQuery } from "react-query";

export default function ReactQueryUse() {
  const { isLoading, error, data } = useQuery("posts", async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
    );
    return await response.json();
  });

  return (
    <div className="fetch">
      <h1>API posts</h1>

      {isLoading && <p>Loading...</p>}
      {error && <div>console.error();</div>}

      {!isLoading && data && (
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

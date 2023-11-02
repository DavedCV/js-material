import { useEffect, useState } from "react";

export default function App() {
  // fetch is triggered in useEffect there, as normal
  const { data } = useData("/get-sidebar");

  // show loading state while waiting for the data
  if (!data) return "loading";

  return (
    <>
      <Sidebar data={data} />
      <Issue />
    </>
  );
}

function Sidebar(data) {
  return (
    <div className="sidebar sidebar-base">
      <ul>
        {data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

function Comments() {
  // fetch is triggered in useEffect there, as normal
  const { data } = useData("/get-comments");

  // show loading state while waiting for the data
  if (!data) return "loading";

  // rendering comments now that we have access to them!
  return (
    <div className="comments">
      <ul>
        {data.map(({ id, comment }) => (
          <li key={id}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

function Issue() {
  // fetch is triggered in useEffect there, as normal
  const { data } = useData("/get-issue");

  // show loading state while waiting for the data
  if (!data) return "loading";

  // render actual issue now that the data is here!
  return (
    <div className="issue">
      <h3>{data.author}</h3>
      <p>{data.description}</p>
      <Comments />
    </div>
  );
}

function useData(url) {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
}

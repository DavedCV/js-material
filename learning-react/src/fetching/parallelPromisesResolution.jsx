import { useEffect, useState } from "react";

export default function App() {
  // all the fetches were triggered in parallel
  const { sidebar, comments, issue } = useAllData();

  // show loading state while waiting for sidebar
  if (!sidebar) return "loading";

  // render sidebar as soon as its data is available
  // but show loading state instead of issue and comments while we're waiting for them
  return (
    <>
      <Sidebar data={sidebar} />
      {issue ? <Issue comments={comments} issue={issue} /> : "Loading..."}
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

function Issue({ comments, issue }) {
  // render actual issue now that the data is here!
  return (
    <div className="issue">
      <h3>{issue.author}</h3>
      <p>{issue.description}</p>
      {comments ? <Comments comments={comments} /> : "Loading..."}
    </div>
  );
}

function Comments({ comments }) {
  // rendering comments now that we have access to them!
  return (
    <div className="comments">
      <ul>
        {comments.map(({ id, comment }) => (
          <li key={id}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

function useAllData() {
  const [sidebar, setSidebar] = useState();
  const [comments, setComments] = useState();
  const [issue, setIssue] = useState();

  useEffect(() => {
    const dataFetch = () => {
      fetch("/get-sidebar")
        .then((response) => response.json())
        .then((data) => setSidebar(data));

      fetch("/get-issue")
        .then((response) => response.json())
        .then((data) => setIssue(data));

      fetch("/get-comments")
        .then((response) => response.json())
        .then((data) => setComments(data));
    };

    dataFetch();
  }, []);

  return { sidebar, comments, issue };
}

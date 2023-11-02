import { useEffect, useState } from "react";

export default function App() {
  // all the fetches were triggered in parallel
  const { sidebar, comments, issue } = useAllData();

  // show loading state while waiting for all the data
  if (!sidebar || !comments || !issue) return "loading";

  // render the actual app here and pass data from state to children
  return (
    <>
      <Sidebar data={sidebar} />
      <Issue comments={comments} issue={issue} />
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
      <Comments comments={comments} />
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
    const dataFetch = async () => {
      // waiting for allthethings in parallel
      const result = (
        await Promise.all([
          fetch("/get-sidebar"),
          fetch("/get-issue"),
          fetch("/get-comments"),
        ])
      ).map((response) => response.json());

      const [sidebarResult, issueResult, commentsResult] =
        await Promise.all(result);

      // when the data is ready, save it to state
      setSidebar(sidebarResult);
      setIssue(issueResult);
      setComments(commentsResult);
    };

    dataFetch();
  }, []);

  return { sidebar, comments, issue };
}

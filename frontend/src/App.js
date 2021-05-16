import * as React from "react";

import "./App.css";

const App = () => {
  const [state, setState] = React.useState({
    loaded: false,
  });

  React.useEffect(() => {
    Promise.all([
      fetch("http://0.0.0.0:7001/api/v1/meta"),
      fetch("http://0.0.0.0:7001/api/v1/cats"),
    ])
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((responses) => {
        const [meta, cats] = responses;
        console.log(meta);
        console.log(cats);
        setState({
          meta,
          cats,
          loaded: true,
        });
      });
  }, []);

  if (state.loaded) {
    return (
      <div>
        <div>
          <h1>Application meta</h1>
          <ul>
            <li>
              <b>Author: {state.meta.author}</b>
            </li>
            <li>
              <b>Server: {state.meta.server}</b>
            </li>
            <li>
              <b>Port: {state.meta.port}</b>
            </li>
            <li>
              <b>Containerized: {state.meta.isDocker ? "Yes" : "No"}</b>
            </li>
          </ul>
        </div>

        <div>
          <h1>Cats owned by {state.meta.author}</h1>
          <ul>
            {state.cats.map((c) => (
              <li key={c}>
                <b>{c}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return <h1>We are loading data, hold on!</h1>;
};

export default App;

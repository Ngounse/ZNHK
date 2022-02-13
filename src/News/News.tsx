import React from "react";
import NewReleases from "./NewRelease";
const News = React.memo(() => {
  return (
    <div>
      <NewReleases />
    </div>
  );
});

export default News;

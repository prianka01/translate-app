import React from "react";
export const RecentSearches = props => {
  const data = props.data;
  return (
    <div id="searches">
      <h2 id="heading1">Recent search history</h2>
      <ul>
        {data.length <= 0
          ? "No recent searches"
          : data.map(dat => (
              <li key={dat._id}>
                <p>{dat.message}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

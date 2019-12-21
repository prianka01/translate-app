import React from "react";
import { deleteData } from "../api";
const deleteDataFromDB = dataToBeDeleted => {
  dataToBeDeleted.forEach(dat => {
    deleteData(dat);
  });
};
export const DeleteSearches = props => {
  return (
    <div id="delete_search">
      <p id="heading1">Delete recent search history:</p>
      <button id="delete" onClick={() => deleteDataFromDB(props.data)}>
        Delete
      </button>
    </div>
  );
};

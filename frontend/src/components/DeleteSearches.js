import React from "react";
import { deleteData } from "../api";

export class DeleteSearches extends React.Component {
  deleteDataFromDB = async (dataToBeDeleted) => {
    for (let dat of dataToBeDeleted) {
      await deleteData(dat);
    }
    this.props.getDataFromDb();
  };

  render() {
    return (
      <div id="delete_search">
        <p id="heading1">Delete recent search history:</p>
        <button
          id="delete"
          onClick={() => {
            this.deleteDataFromDB(this.props.data);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

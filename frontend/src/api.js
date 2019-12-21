import axios from "axios";
export function getData() {
  const data = fetch("http://localhost:3002/api/getData")
    .then(data => data.json())
    .then(res => res.data);
  return data;
}
export const deleteData = dat => {
  axios.delete("http://localhost:3002/api/deleteData", {
    data: {
      id: dat._id
    }
  });
};
export const translateText = input_text => {
  const url = "https://api.funtranslations.com/translate/minion.json";
  //const url = "http://localhost:3002/api/translate";
  const data = axios
    .post(url, { text: input_text })
    .then(response => response.data)
    .catch(err => console.log(err));
  console.log(data);
  return data;
};
export const putData = (message, idToBeAdded) => {
  axios.post("http://localhost:3002/api/putData", {
    id: idToBeAdded,
    message: message
  });
};

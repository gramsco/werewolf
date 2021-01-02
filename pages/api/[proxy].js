import getData from "../../data";
import createGame from "../../createGame";
import updateCheckList from "../../updateCheckList";

let methods = {
  getData,
  createGame,
  updateCheckList,
};

export default async (req, res) => {
  console.log(req.query.proxy);
  let data = await methods[req.query.proxy](req.body);
  res.json(data);
};

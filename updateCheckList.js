import base from "./serverbase";
import { v4 as uuidv4 } from "uuid";

async function updateCheckList(body) {
  let { username, checkListID } = body;

  let created = await base
    .post(`/checklists/${checkListID}/checkItems?name=${username}`)
    .then((res) => res.data);
  return created;
}

export default updateCheckList;

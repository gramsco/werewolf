import base from "./serverbase";
import { v4 as uuidv4 } from "uuid";

async function createGame() {
  let uuid = uuidv4();
  let created = await base
    .post(
      `/cards?name=${uuid}&idList=5fefbabbc6b0b719e7c1f0ef&idCardSource=5fefd7d94687686b16792661`
    )
    .then((res) => res.data);
  return created;
}

export default createGame;

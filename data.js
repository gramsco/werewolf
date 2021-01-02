import base from "./serverbase";

async function getData() {
  const id = process.env.ID_BOARD;

  let lists = await base.get(`/boards/${id}/lists`).then((res) => res.data);
  let cards = await base.get(`/boards/${id}/cards`).then((res) => res.data);

  let data = lists.map((l) => {
    let { id, name } = l;

    let listCards = cards.filter((c) => c.idList === id);

    return { id, name, cards: listCards };
  });

  return { ...data, simple_cards: cards };
}

export default getData;

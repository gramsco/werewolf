import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getData from "../../data";
import Cookies from "js-cookie";

export async function getStaticPaths() {
  let data = await getData();
  let { simple_cards } = data;

  return {
    paths: simple_cards.map((e) => `/rooms/${String(e.name)}`),
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  let { params } = ctx;
  let { room } = params;

  let data = await getData();
  let { simple_cards } = data;

  let roomProps = simple_cards.find((e) => e.name === room);

  return {
    props: roomProps,
  };
}

export default function Home(props) {
  const proxy = () => axios.get("/api/getData").then((res) => res.data);

  const router = useRouter();

  const [username, setUsername] = useState(null);

  useEffect(() => {
    let username = Cookies.get("username");
    if (!username) setUsername(false);
    else setUsername(username);
  }, [username]);

  const loading = router.isFallback || !username;

  const [input, setInput] = useState("");

  function handleUserName(e) {
    e.preventDefault();
    Cookies.set("username", input);
    setUsername(input);
  }

  return (
    <>
      {username}
      {username === false && (
        <div style={{ width: "40vw", margin: "0 auto" }}>
          <h1>Enter a username</h1>
          <form onSubmit={handleUserName}>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Okay</button>
          </form>
        </div>
      )}
    </>
  );
}

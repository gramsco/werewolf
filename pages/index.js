import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Intro() {
  const [username, setUsername] = useState("");
  const [state, setState] = useState(null);
  const [uuid, setUUID] = useState(null);

  const router = useRouter();
  function handleCreate() {
    if (username === "") {
      setState("you should provide a username");
      return;
    }
    setState("creating the game");
    axios.get("/api/createGame").then((res) => {
      setState("game created");
      setUUID(res.data.name);
    });
  }
  return (
    <div>
      <h1>Bienvenue</h1>

      <div>
        <h2>Rejoindre une partie</h2>
        <div>
          <input />
          <button>Go</button>
        </div>
        <h2>Créer une partie</h2>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleCreate}>Go</button>
        </div>
        {!!state && state}
        {!!uuid && (
          <div
            style={{
              width: "40vw",
              display: "grid",
              margin: "0 auto",
              placeItems: "center",
            }}
          >
            {window.location.href + "rooms/" + uuid}
          </div>
        )}
      </div>
    </div>
  );
}

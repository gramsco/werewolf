import axios from "axios";
import useSWR from "swr";
import getData from "../../data";
import Link from "next/link";

export async function getStaticProps() {
  let data = await getData();

  return {
    props: { staticData: data },
  };
}

export default function Home({ staticData }) {
  const proxy = () => axios.get("/api/getData").then((res) => res.data);

  console.log(staticData);
  let { data, isValidating } = useSWR("/data", proxy, {
    initialData: staticData,
    refreshInterval: 3000,
  });

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {data.simple_cards.map((e) => (
          <Link href={`/rooms/${e.name}`}>
            <a>{e.name}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
}

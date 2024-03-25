
import axios from "axios";

export default function Home({data}) {
  return (
    <>
      <h1>ezae</h1>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:3000/api/articles"); // POUR CALL URL GET
  // await axios.post("http://localhost:3000/api/article"); // POUR CALL URL POST
  // await axios.put("http://localhost:3000/api/article"); // POUR CALL URL POST
  //await axios.delete("http://localhost:3000/api/article"); // POUR CALL URL POST
  return {
    props: {
      data,
    },
  };
}
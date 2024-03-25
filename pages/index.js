import React from "react";
import Link from "next/link";
import articles from "./api/articles";
import { handler } from "./api/articles";
export default function index({ article }) {
  return (
    <div>
      <div className="text-center h1"> Nos produits</div>
      <div>
        {" "}
        {article.map((article) => (
          <p> {article.name}</p>
        ))}{" "}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const req = {
    method: "GET",
  };

  const response = { articles: null };
  const convertiString = (articles) => {
    return articles.map((article) => ({
      ...article,
      _id: article._id.toString(),
    }));
  };
  try {
    const res = {
      status: () => {},
      json: (data) => {
        response.articles = convertiString(data);
      },
    };
    await handler(req, res);

    return {
      props: { response },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { article: [] },
    };
  }
}

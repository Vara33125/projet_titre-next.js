// Importation du client MongoDB depuis le fichier où il a été configuré
import connect from "@/lib/mongoDB";
import articleModel from "@/models/article.model";

export default async (req, res) => {
  // Attente de la connexion du client MongoDB
  await connect();

  switch (req.method) {
    case "POST":
      // Code pour gérer une requête POST
      return res.status(201).json("POST");
    case "GET":
      try {
        // Code pour gérer une requête GET
        const response = await findArticles();
        return res.status(200).json(response);
      } catch (e) {
        return res.status(500).json(e);
      }
    case "PUT":
      // Code pour gérer une requête PUT
      return res.status(200).json("PUT");
    default:
      console.log("Method introuvable");
  }
};

const findArticles = async () => {
  try {
    const articles = await articleModel.find();
    return articles;
  } catch (e) {
    return e;
  }
};

const postArticle = async () => {
  try {
    //
  } catch (e) {
    //
  }
};

const deleteArticle = async () => {
  try {
    //
  } catch (e) {
    //
  }
};

const putArticle = async () => {
  try {
    //
  } catch (e) {
    //
  }
};
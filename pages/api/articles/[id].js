// Importation du client MongoDB depuis le fichier où il a été configuré
import connect from "@/lib/mongoDB";
import ArticleModel from "@/model/article.model";

export default async (req, res) => {
  // Attente de la connexion du client MongoDB
  await connect();
  try {
    // exemple
    const response = await ArticleModel.findById(req.query.id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json(e);
  }
};
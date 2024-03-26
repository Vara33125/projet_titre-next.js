// Importation du client MongoDB depuis le fichier où il a été configuré
import connect from "@/lib/mongoDB";
import articleModel from "@/models/article.model";

export default async (req, res) => {
  // Attente de la connexion du client MongoDB
  await connect();

  switch (req.method) {
    case "POST":
      // Code pour gérer une requête POST
      try {
        const response = await postArticle()
        return res.status(201).json(response);
        
      } catch (error) {
        return res.status(500).json(error);
      }
    case "GET":
      try {
        // Code pour gérer une requête GET
        const response = await findArticles();
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json(error);
      }
    case "PUT":
      // Code pour gérer une requête PUT
      try {
        const updateArticle = await putArticle()
      return res.status(200).json(updateArticle);
      } catch (error) {
        return res.status(500).json(error);
      }
      case "DELETE":
      // Code pour gérer une requête PUT
      try {
        const delArticle = await deleteArticle()
      return res.status(200).json(delArticle);
      } catch (error) {
        return res.status(500).json(error);
      }
      
    default:
      console.log("Methode introuvable");
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
    const addArticle = await articleModel.create(...req.body)
    return addArticle
  } catch (e) {
    return(e)
    
  }
};

const deleteArticle = async () => {
  try {
    const del = await articleModel.findByIdAndDelete(req.params.id)
    return del
  } catch (e) {
    return (e)
  }
};

const putArticle = async () => {
  try {
    const put = await articleModel.findByIdAndUpdate(req.params.id)
    return put
  } catch (e) {
    return (e)
  }
};
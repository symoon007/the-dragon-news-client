import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import Home from "../Home/Home";

const Category = () => {
  const { name } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>Dragon News {name}</h3>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;

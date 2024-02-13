import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorInsightHome from "../../News/News/EditorInsightHome";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://the-dragon-news-server-mu-ruddy.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => {
        // console.log("fetch data ", data);

        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="px-2">
        {categories.map((category) => (
          <p key={category.id} className="">
            <Link
              to={`/categories/${category.id}`}
              className="text-dark-emphasis text-decoration-none "
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <EditorInsightHome />
    </div>
  );
};

export default LeftSidebar;

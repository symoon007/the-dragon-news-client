import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="px-2">
        {categories.map((category) => (
          <p key={category.id} className="">
            <Link
              to={`/all-category/${category.name}`}
              className="text-dark-emphasis text-decoration-none "
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;

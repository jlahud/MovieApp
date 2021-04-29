import React from "react";
import Category from "./Category";

const Categories = ({ categories, deleteCategory, openCategoryModal }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {categories.map((category) => (
          <li key={category.id} className="list-group-item">
            <Category
              openCategoryModal={openCategoryModal}
              category={category}
              deleteCategory={deleteCategory}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;

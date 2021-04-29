import React from "react";

const Category = ({ category, deleteCategory, openCategoryModal }) => {
  return (
    <div className="mb-2 d-flex justify-content-between align-items-center">
      <span className="text-primary lead">{ category.name }</span>
      <div>
        <i
            onClick={ () => { openCategoryModal(category) } }
            className="fas fa-edit text-info lead mx-2"
            style={{ cursor: "pointer" }}
        ></i>
        <i
            onClick={ () => { deleteCategory(category.id) } }
            className="fas fa-times text-danger lead mx-1"
            style={{ cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};

export default Category;

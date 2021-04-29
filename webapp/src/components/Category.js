import React from "react";

const Category = ({ category, deleteCategory }) => {
  const editCategory = () => {
    document.getElementById('editCategoryId').value = category.id
    document.getElementById('editCategory').value = category.name
    let modal = $("#categoryEditModal");
    modal.toggleClass("fade");
    modal.modal("toggle");
  }
  return (
    <div className="mb-2 d-flex justify-content-between align-items-center">
      <span className="text-primary lead">{ category.name }</span>
      <div>
        <i
            onClick={ editCategory }
            className="fas fa-edit text-info lead mr-3"
            style={{ cursor: "pointer" }}
        ></i>
        <i
            onClick={ () => { deleteCategory(category.id) } }
            className="fas fa-times text-danger lead"
            style={{ cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};

export default Category;

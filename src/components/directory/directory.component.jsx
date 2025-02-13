import CategoryIem from "../category-item/category-item.component";

import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryIem key={category.id} category={category} />
      ))}
      ;
    </div>
  );
};

export default Directory;

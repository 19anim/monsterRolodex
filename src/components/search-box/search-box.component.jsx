import "./search-box.style.css";

const SearchBox = (props) => {
  const { placeholder, onChangeHandler, className } = props;

  return (
    <input
      className={`${className} search-box`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
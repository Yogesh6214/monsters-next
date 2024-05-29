import "./search-box.style.css";
export const SearchBox = ({ handlechange, placeholder }) => (
  <div className="container">
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      name=""
      id=""
      onChange={(e) => handlechange(e)}
    />
  </div>
);

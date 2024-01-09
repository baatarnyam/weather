import { MdSearch } from "react-icons/md";
const Search = ({ children }) => {
  return (
    <div>
      {" "}
      <div className="w-2/3 h-[30px] rounded-[15px] flex overflow-hidden">
        <MdSearch
          width={40}
          height={40}
          className="w-fit h-full text-gray-400 bg-white"
        />
        <input
          type="text"
          className="w-full h-full outline-0"
          placeholder="Search"
          style={{ border: "none" }}
        />
      </div>
      {children}
    </div>
  );
};
export default Search;

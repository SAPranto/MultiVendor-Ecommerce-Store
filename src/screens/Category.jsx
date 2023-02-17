import "../App.css";
import FilterBar from "../components/FilterBar";
import CategoryProducts from "../components/CategoryProducts";

function Category() {
  return (
    <div className="">
      <div className="">
        <img src="/headphone3.webp" alt="" className="h-[27rem] w-full object-cover" />
      </div>

      <div className="flex gap-8 bg-gray-200 pt-5">
        <FilterBar />
      </div>
    </div>
  );
}

export default Category;

import "../App.css";
import FilterBar from "../components/FilterBar";
import CategoryProducts from "../components/CategoryProducts";

function Category() {
  return (
    <div className="">
      <div className="">
        <img src="/img1.jpg" alt="" className="h-[27rem] w-full" />
      </div>

      <div className="flex gap-8 bg-gray-200 pt-5">
        <FilterBar />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
          <CategoryProducts src='/product.webp' title='Product 1' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 2' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 3' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 4' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 5' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 6' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 7' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 8' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 9' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 10' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 11' price='1000' rating='4.5'/>
          <CategoryProducts src='/product.webp' title='Product 12' price='1000' rating='4.5'/>
        </div>
      </div>
    </div>
  );
}

export default Category;

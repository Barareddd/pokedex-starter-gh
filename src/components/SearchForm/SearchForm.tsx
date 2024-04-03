import { generationList, typesList, sortList } from "../../utils/optionList";
import { useSearchForm } from ".";

const SearchForm = () => {
  const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
    useSearchForm();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[20px]">
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="generation"
            className="block mb-2 text-md font-medium text-white"
          >
            Generation
          </label>
          <select
            {...fieldGeneration}
            id="generation"
            className="bg-[#0A141E] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#395CA5] focus:border-[#395CA5] block w-full p-2.5"
          >
            {generationList.map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={`generation-key-${index}`}
                  value={index}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="type"
            className="block mb-2 text-md font-medium text-white"
          >
            Type
          </label>
          <select
            {...fieldType}
            id="type"
            className="bg-[#0A141E] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#395CA5] focus:border-[#395CA5] block w-full p-2.5"
          >
            {typesList.map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={`type-key-${index}`}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="sort"
            className="block mb-2 text-md font-medium text-white"
          >
            Sort By
          </label>
          <select
            {...fieldSort}
            id="sort"
            className="bg-[#0A141E] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#395CA5] focus:border-[#395CA5] block w-full p-2.5"
          >
            {sortList.map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={`sort-key-${index}`}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-2 text-md font-medium text-white"
          >
            Search
          </label>
          <input
            {...fieldKeyword}
            id="countries"
            className="bg-[#0A141E] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#395CA5] focus:border-[#395CA5] block w-full p-2.5"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

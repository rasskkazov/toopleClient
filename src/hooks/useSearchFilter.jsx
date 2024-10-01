import InputField from "../components/UI/input_field/InputField";
function useSearchFilter(elementsToFilter, setFilteredElements) {
    const searchBar = (
        <InputField
            placeholder={"Поиск"}
            name="search"
            id="search"
            onChange={(e) => filterElements(e.target.value)}
        />
    );
    function filterElements(searchQueryValue) {
        const filteredElements = elementsToFilter.filter((element) => {
            const searchInArray = (property) =>
                property.toLowerCase().includes(searchQueryValue.toLowerCase());

            if (element.searchBy.some(searchInArray)) return true;
            return false;
        });
        setFilteredElements(filteredElements);
    }
    return [searchBar];
}

export default useSearchFilter;

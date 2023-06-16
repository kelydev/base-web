import React, { useState, useEffect } from "react";

const Filter: React.FC = () =>  {
    const [categories, setCategories] = useState<string[]>([]);

    const [category, setCategory] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const data = await response.json();
            setCategories(data);
          } catch (error) {
            console.error("Error al obtener las categorías:", error);
          }
        };
      
        fetchCategories();
      }, []);


    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
      };
    
      const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
      };

      const handleSearch = () => {
        // Lógica para realizar la búsqueda con la categoría y el texto de búsqueda seleccionados
        console.log("Categoría seleccionada:", category);
        console.log("Texto de búsqueda:", searchText);
      };
    

    return (
        <div>
            <label htmlFor="category">Categoría:</label>

            <select id="category" value={category} onChange={handleCategoryChange}>
                <option value="">Todas las categorías</option>
                    {categories.map((categoryOption) => (
                    <option key={categoryOption} value={categoryOption}>
                    {categoryOption}
                </option>
            ))}
            </select>

            <label htmlFor="searchText">Buscar:</label>
            <input
                type="text"
                id="searchText"
                value={searchText}
                onChange={handleSearchTextChange}
            />
            <br />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
}

export default Filter;
import React, { useState } from "react";

function FilterComponent() {
  const [locationFilters, setLocationFilters] = useState([]);
  const [genderFilters, setGenderFilters] = useState([]);
  const [speciesFilters, setSpeciesFilters] = useState([]);
  const [originFilters, setOriginFilters] = useState([]);
  const [locationTypeFilters, setLocationTypeFilters] = useState([]);

  const handleLocationFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue)
    if (event.target.checked) {
      setLocationFilters([...locationFilters, selectedValue]);
    } else {
      setLocationFilters(
        locationFilters.filter((value) => value !== selectedValue)
      );
    }
  };

  const handleGenderFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (event.target.checked) {
      setGenderFilters([...genderFilters, selectedValue]);
    } else {
      setGenderFilters(
        genderFilters.filter((value) => value !== selectedValue)
      );
    }
  };

  const handleSpeciesFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (event.target.checked) {
      setSpeciesFilters([...speciesFilters, selectedValue]);
    } else {
      setSpeciesFilters(
        speciesFilters.filter((value) => value !== selectedValue)
      );
    }
  };

  const handleOriginFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (event.target.checked) {
      setOriginFilters([...originFilters, selectedValue]);
    } else {
      setOriginFilters(
        originFilters.filter((value) => value !== selectedValue)
      );
    }
  };

  const handleLocationTypeFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (event.target.checked) {
      setLocationTypeFilters([...locationTypeFilters, selectedValue]);
    } else {
      setLocationTypeFilters(
        locationTypeFilters.filter((value) => value !== selectedValue)
      );
    }
  };

  return (
    <div className="flex flex-col w-64 p-4 bg-gray-100">
      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Filtrar por ubicación</h3>
        <ul className="pl-4 mt-2 space-y-2">
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Ciudad de mexico"
                onChange={handleLocationFilterChange}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Ciudad de México</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Monterrey"
                onChange={handleLocationFilterChange}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Monterrey</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Guadalajara</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Filtrar por género</h3>
        <ul className="pl-4 mt-2 space-y-2">
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Hombre</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Mujer</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">No binario</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Filtrar por especie</h3>
        <ul className="pl-4 mt-2 space-y-2">
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Perro</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Gato</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-600">Ave</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterComponent;

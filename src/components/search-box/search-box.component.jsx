import React from "react";
import { useGlobalContext } from "../../context";

import Title from "../../components/title/title.component";

import { SearchBoxContainer, Form, SearchGroup, SearchLabel, SearchInput, InputContainer, SizeInput, CheckBoxLabel } from "./search-box.styles";

// Get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function SearchBox() {
  const { rooms, handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useGlobalContext();

  return (
    <SearchBoxContainer>
      <Title title="Search rooms" />

      <Form>
        {/* Type */}
        <SearchGroup>
          <SearchLabel htmlFor="type">Room type</SearchLabel>
          <SearchInput id="type" name="type" value={type} onChange={handleChange}>
            {["all", ...getUnique(rooms, "type")].map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </SearchInput>
        </SearchGroup>

        {/* Guests */}
        <SearchGroup>
          <SearchLabel htmlFor="capacity">Guests</SearchLabel>
          <SearchInput id="capacity" name="capacity" value={capacity} onChange={handleChange}>
            {getUnique(rooms, "capacity").map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </SearchInput>
        </SearchGroup>

        {/* Price */}
        <SearchGroup>
          <SearchLabel htmlFor="price">Room price ${price}</SearchLabel>
          <SearchInput as="input" id="price" type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} />
        </SearchGroup>

        {/* Size */}
        <SearchGroup>
          <SearchLabel htmlFor="size">Room size</SearchLabel>
          <InputContainer>
            <SizeInput type="number" id="size" name="minSize" value={minSize} onChange={handleChange} />
            <SizeInput type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange} />
          </InputContainer>
        </SearchGroup>

        {/* Extras */}
        <SearchGroup>
          <div>
            <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} onChange={handleChange} />
            <CheckBoxLabel htmlFor="breakfast">Breakfast</CheckBoxLabel>
          </div>

          <div>
            <input type="checkbox" id="pets" name="pets" checked={pets} onChange={handleChange} />
            <CheckBoxLabel htmlFor="pets">Pets</CheckBoxLabel>
          </div>
        </SearchGroup>
      </Form>
    </SearchBoxContainer>
  );
}

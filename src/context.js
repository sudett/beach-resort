import React, { createContext, useContext, useState, useEffect } from "react";
import items from "./data";

const formatData = (items) => {
  const rooms = items.map((item) => {
    const id = item.sys.id;
    const images = item.fields.images.map((img) => img.fields.file.url);
    const room = { ...item.fields, images, id };
    return room;
  });

  return rooms;
};

// Context object
const RoomContext = createContext();

// Provider
export const RoomProvider = ({ children }) => {
  const rooms = formatData(items);
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [inputs, setInputs] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  const { type, capacity, price, minSize, maxSize, breakfast, pets } = inputs;

  useEffect(() => {
    const maximunPrice = Math.max(...rooms.map((room) => room.price));
    const maximunSize = Math.max(...rooms.map((room) => room.size));

    setMaxPrice(maximunPrice);
    setInputs({ ...inputs, price: maximunPrice, maxSize: maximunSize });
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setInputs({ ...inputs, [name]: value });
  };

  useEffect(() => {
    let sortedRooms = [...rooms];

    if (type !== "all") sortedRooms = sortedRooms.filter((room) => room.type === type);

    if (+capacity >= 2) sortedRooms = sortedRooms.filter((room) => room.capacity >= capacity);

    sortedRooms = sortedRooms.filter((room) => room.price >= minPrice && room.price <= +price);

    sortedRooms = sortedRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

    if (breakfast) sortedRooms = sortedRooms.filter((room) => room.breakfast);
    if (pets) sortedRooms = sortedRooms.filter((room) => room.pets);

    setFilteredRooms(sortedRooms);
  }, [inputs]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        filteredRooms,
        handleChange,
        minPrice,
        maxPrice,
        ...inputs,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

// Global Context Hook
export const useGlobalContext = () => useContext(RoomContext);

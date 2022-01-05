import React, { createContext, useContext } from "react";

import items from "./data";

const formatData = (items) => {
  return items.map((item) => {
    const id = item.sys.id;
    const newImages = item.fields.images.map((img) => img.fields.file.url);

    return { ...item.fields, id, images: newImages };
  });
};

// Context object
const RoomContext = createContext();

// Provider
export const RoomProvider = ({ children }) => {
  const rooms = formatData(items);

  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

// Global Context Hook
export const useGlobalContext = () => useContext(RoomContext);

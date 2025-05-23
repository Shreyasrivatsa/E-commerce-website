import React, { createContext } from 'react';
import new_collections from '../Components/Assets/new_collections'; // your array

export const NewCollectionContext = createContext();

const NewCollectionProvider = ({ children }) => {
  return (
    <NewCollectionContext.Provider value={new_collections}>
      {children}
    </NewCollectionContext.Provider>
  );
};

export default NewCollectionProvider;

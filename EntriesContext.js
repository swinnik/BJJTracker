import React, { createContext, useState } from "react";

const EntriesContext = createContext();

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <EntriesContext.Provider value={{ entries, setEntries, skills, setSkills }}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesContext;

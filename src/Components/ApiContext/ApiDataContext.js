// ApiDataContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const ApiDataContext = createContext();

export function ApiDataProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const apiUrl = 'http://127.0.0.1:8000/presms/academicyear/';

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error('Error fetching API data:', error));
  }, []);

  return (
    <ApiDataContext.Provider value={apiData}>
      {children}
    </ApiDataContext.Provider>
  );
}

/*export function useApiData() {
  return useContext(ApiDataContext);
}
*/
import { useState, useEffect } from 'react';

export const useLogementsData = () => {
  const [logementsData, setLogementsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
        const data = await response.json();
        setLogementsData(data);
      } catch (error) {
        console.error('Error fetching logements data:', error);
      }
    };

    if (logementsData.length === 0) {
      fetchData();
    }
  }, [logementsData]);

  return logementsData;
};


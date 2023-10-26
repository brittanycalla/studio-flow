import { useMemo, useState } from "react"

const useSortableData = (data, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const getValue = (obj, key) => {
    const keys = key.split('.'); // This will help in accessing nested properties
    return keys.reduce((o, k) => (o || {})[k], obj);
  };

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aValue = String(getValue(a, sortConfig.key)).toLowerCase();
        const bValue = String(getValue(b, sortConfig.key)).toLowerCase();
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { data: sortedData, requestSort, sortConfig };
};

export default useSortableData
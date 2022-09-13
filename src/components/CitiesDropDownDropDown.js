import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import cityServices from "../services/city.services";

const CitiesDropDown = ({ title }) => {
  const [cities, setCities] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchCities = async () => {
      const { cities, totalCitiesCount } = await cityServices.getCitiesRequest(
        page
      );
      setCities(cities);
      setTotalCount(totalCitiesCount);
    };
    fetchCities();
  }, [page]);
  return (
    <DropDown
      title={title}
      items={cities}
      totalItemsCount={totalCount}
      handlePageChange={(e, value) => setPage(value)}
    />
  );
};
export default CitiesDropDown;

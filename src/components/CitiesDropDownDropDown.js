import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import cityServices from "../services/city.services";

const CitiesDropDown = ({ title }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      const cities = await cityServices.getCitiesRequest();
      setCities(cities);
    };
    fetchCities();
  }, []);
  return <DropDown title={title} items={cities} />;
};
export default CitiesDropDown;

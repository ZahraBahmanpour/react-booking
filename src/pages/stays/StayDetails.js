import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import staysServices from "../../services/stays.services";

const StayDetails = () => {
  const [stay, setStay] = useState([]);
  const { stayId } = useParams();

  useEffect(() => {
    const fetchStay = async () => {
      const stay = await staysServices.getStayRequest(stayId);
      setStay(stay);
    };
    fetchStay();
  }, [stayId]);

  return <div>{stay.name}</div>;
};

export default StayDetails;

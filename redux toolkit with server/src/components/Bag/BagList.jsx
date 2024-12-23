import { useDispatch, useSelector } from "react-redux";
import BagItem from "./BagItem";
import { useEffect } from "react";
import { getBag } from "../../store/reducerBag";

function BagList() {
  let dispatch = useDispatch()
  let bag = useSelector((state) => state.bag.bag)

  useEffect(() => {
    dispatch(getBag());
  }, []);

  return (
    <ul>
      {bag.map((item) => (
        <BagItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default BagList;

import { useDispatch, useSelector } from "react-redux";
import BagItem from "./BagItem";
import { useEffect } from "react";

function BagList() {
  let dispatch = useDispatch()
  let bag = useSelector((state) => state.bagReducer.bag)

  useEffect(() => {
    dispatch({ type: "GET BAG" });
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

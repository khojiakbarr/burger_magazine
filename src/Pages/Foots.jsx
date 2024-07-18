import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyCard from "../components/MyCard";
import { useGetFoodsQuery } from "../ApiSlice";

export default function Foots() {
  const { category } = useParams();
  const { data } = useGetFoodsQuery();
  const newFoods = data?.filter((foot) => {
    if (foot.category === category) {
      return foot;
    }
  });
  useEffect(() => {
    console.log(newFoods);
  }, [data]);

  return (
    <div className="flex gap-[10px] flex-wrap">
      {newFoods?.map((food) => (
        <MyCard key={food?.id} food={food} />
      ))}
    </div>
  );
}

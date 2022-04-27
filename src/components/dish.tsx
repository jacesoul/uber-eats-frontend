import React from "react";
import { restaurant_restaurant_restaurant_menu_options } from "../__generated__/restaurant";

interface IDishProps {
  id?: number;
  name: string;
  description: string;
  price: number;
  isCustomer?: boolean;
  options?: restaurant_restaurant_restaurant_menu_options[] | null;
  orderStarted?: boolean;
  addItemToOrder?: (dishId: number) => void;
}

export const Dish: React.FC<IDishProps> = ({
  id = 0,
  description,
  name,
  price,
  isCustomer = false,
  orderStarted = false,
  options,
  addItemToOrder,
}) => {
  console.log(options);
  return (
    <div
      onClick={() =>
        orderStarted && addItemToOrder ? addItemToOrder(id) : null
      }
      className="  px-8 py-4 border hover:border-gray-800 transition-all"
    >
      <div className="mb-5">
        <h3 className=" text-lg font-medium ">{name}</h3>
        <h4 className=" font-medium">{description}</h4>
      </div>
      <span>${price}</span>
      {isCustomer && options && options?.length !== 0 && (
        <div>
          <h5 className=" my-8 mb-3 font-medium">Dish Options</h5>
          {options?.map((option, index) => (
            <span className="flex items-center" key={index}>
              <h6 className=" mr-2">{option.name}</h6>
              <h6 className=" text-sm opacity-75">(${option.extra})</h6>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

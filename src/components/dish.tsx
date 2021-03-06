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
  isSelected?: boolean;
  addItemToOrder?: (dishId: number) => void;
  removeFromOrder?: (dishId: number) => void;
}

export const Dish: React.FC<IDishProps> = ({
  id = 0,
  description,
  name,
  price,
  isCustomer = false,
  orderStarted = false,
  options,
  isSelected,
  addItemToOrder,
  removeFromOrder,
  children: dishOptions,
}) => {
  const onClick = () => {
    if (orderStarted) {
      if (!isSelected && addItemToOrder) {
        return addItemToOrder(id);
      }
      if (isSelected && removeFromOrder) {
        return removeFromOrder(id);
      }
    }
  };
  return (
    <div
      className={`  px-8 py-4 cursor-pointer border transition-all ${
        isSelected ? "border-gray-800 " : "hover:border-gray-800 "
      }`}
    >
      <div className="mb-5">
        <h3 className=" text-lg font-medium flex items-center">
          {name}{" "}
          {orderStarted && (
            <button
              className={`ml-3 py-1 px-3 focus:outline-none text-sm text-white ${
                isSelected ? "bg-red-500" : "bg-emerald-600"
              }`}
              onClick={onClick}
            >
              {isSelected ? "Remove" : "Add"}
            </button>
          )}
        </h3>
        <h4 className=" font-medium">{description}</h4>
      </div>
      <span>${price}</span>
      {isCustomer && options && options?.length !== 0 && (
        <div>
          <h5 className=" my-8 mb-3 font-medium">Dish Options</h5>
          <div className=" grid gap-2 justify-start">{dishOptions}</div>
        </div>
      )}
    </div>
  );
};

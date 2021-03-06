import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import uberLogo from "../images/uber-eats-logo.svg";
import rightArrow from "../images/right-arrow-bracket.svg";

interface IHeaderProps {
  email: string;
}

export const Header: React.FC<IHeaderProps> = ({ email }) => {
  const { data } = useMe();
  const onLogOutClick = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      {!data?.me.verified && (
        <div className=" bg-red-500 py-3 px-3 text-center text-base text-white">
          <span>Please verify your email.</span>
        </div>
      )}
      <header className=" py-1">
        <div className=" w-full px-5 py-2 xl:px-0 max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={uberLogo} className="w-24" alt="Uber Eats"></img>
          </Link>
          <div className=" flex justify-center items-center">
            <span className=" text-xs">
              <Link to="/edit-profile">
                <FontAwesomeIcon icon={faUser} className=" text-xl" />
              </Link>
            </span>
            <span onClick={onLogOutClick}>
              <img
                src={rightArrow}
                alt="Log Out"
                className=" ml-5 w-6 cursor-pointer"
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

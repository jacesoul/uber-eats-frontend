import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { RESTAURANT_FRAGMENT } from "../../fragments";
import {
  searchRestaurant,
  searchRestaurantVariables,
} from "../../__generated__/searchRestaurant";

const SEARCH_RESTAURANT = gql`
  query searchRestaurant($input: SerachRestaurantInput!) {
    serachRestaurant(input: $input) {
      ok
      error
      totalPages
      totalResults
      restaurants {
        ...RestaurantParts
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [queryReadyToStart, { loading, data }] = useLazyQuery<
    searchRestaurant,
    searchRestaurantVariables
  >(SEARCH_RESTAURANT);
  useEffect(() => {
    const [_, query] = location.search.split("?term=");
    if (!query) {
      return navigate("/", { replace: true });
    }
    queryReadyToStart({
      variables: {
        input: {
          page: 1,
          query,
        },
      },
    });
  }, [location, navigate]);
  console.log(loading, data);
  return (
    <h1>
      <Helmet>
        <title>Search | Uber-Eats</title>
      </Helmet>
      Search Page
    </h1>
  );
};

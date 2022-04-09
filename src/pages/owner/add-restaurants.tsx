import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { FormError } from "../../components/form-error";
import {
  createRestaurant,
  createRestaurantVariables,
} from "../../__generated__/createRestaurant";

const CREATE_RESTAURANT_MUTATION = gql`
  mutation createRestaurant($input: CreateRestaurantInput!) {
    createRestaurant(input: $input) {
      error
      ok
    }
  }
`;

interface IFormProps {
  name: string;
  address: string;
  categoryName: string;
  file: FileList;
}

export const AddRestaurant = () => {
  const onCompleted = (data: createRestaurant) => {
    const {
      createRestaurant: { ok, error },
    } = data;
    if (ok) {
      setUploading(false);
    }
  };
  const [createRestaurantMutation, { loading, data }] = useMutation<
    createRestaurant,
    createRestaurantVariables
  >(CREATE_RESTAURANT_MUTATION, {
    onCompleted,
  });
  const { register, getValues, formState, errors, handleSubmit } =
    useForm<IFormProps>({
      mode: "onChange",
    });
  const [uploading, setUploading] = useState(false);
  const onSubmit = async () => {
    try {
      setUploading(true);
      const { file, name, categoryName, address } = getValues();
      const actualFile = file[0];
      const formBody = new FormData();
      formBody.append("file", actualFile);
      const { url: coverImg } = await (
        await fetch("http://localhost:4000/uploads/", {
          method: "POST",
          body: formBody,
        })
      ).json();
      createRestaurantMutation({
        variables: {
          input: {
            name,
            categoryName,
            address,
            coverImg,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container flex flex-col justify-center items-center">
      <Helmet>
        <title>Add Restaurant | Uber Eats</title>
      </Helmet>
      <h1 className=" font-semibold text-2xl mb-3">Add Restaurant</h1>
      <form
        className="grid gap-3 max-w-screen-sm w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input"
          name="name"
          placeholder="Name"
          ref={register({ required: "Name is required." })}
          type="text"
        />
        <input
          className="input"
          name="address"
          placeholder="Address"
          ref={register({ required: "Address is required." })}
          type="text"
        />
        <input
          className="input"
          name="categoryName"
          placeholder="Category Name"
          ref={register({ required: "Category Name is required." })}
          type="text"
        />
        <div>
          <input
            ref={register({ required: true })}
            type="file"
            name="file"
            accept="image/*"
          />
        </div>
        <Button
          loading={uploading}
          canClick={formState.isValid}
          actionText="Create Restaurant"
        />
        {data?.createRestaurant.error && (
          <FormError errorMessage={data.createRestaurant.error} />
        )}
      </form>
    </div>
  );
};

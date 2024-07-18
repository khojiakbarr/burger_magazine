import { Button, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddFoodsMutation, useGetCategoriesQuery } from "../ApiSlice";

function AddFoots() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { data } = useGetCategoriesQuery();
  const [addFood] = useAddFoodsMutation();

  const onSubmit = (data) => {
    console.log(data);
    addFood({
      ...data,
    });
    reset();
    navigate("/foot");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[300px] flex-col gap-4"
      >
        <div>
          <TextInput
            type="text"
            placeholder="Name"
            required
            {...register("name")}
          />
        </div>
        <div>
          <TextInput
            type="url"
            placeholder="Image URL"
            required
            {...register("image")}
          />
        </div>
        <div>
          <TextInput
            type="number"
            placeholder="Price"
            required
            {...register("price")}
          />
        </div>
        <div>
          <Select {...register("category")} required>
            {data?.map((cat) => (
              <option key={cat.id} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <textarea
            name="description"
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default AddFoots;

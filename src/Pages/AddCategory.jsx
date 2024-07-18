import { Button, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddCategoriesMutation } from "../ApiSlice";

export default function AddCategory() {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const [addCategory] = useAddCategoriesMutation();

  const onSubmit = (data) => {
    addCategory({
      ...data,
    });
    reset();
    navigate("/foot");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="flex w-[300px] flex-col gap-4"
      >
        <div>
          <TextInput
            id="category"
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

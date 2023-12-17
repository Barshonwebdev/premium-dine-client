import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;

const AddItem = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    console.log(formData);
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        reset();
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axios
            .post(
              "https://premium-dine-server-production.up.railway.app/menu",
              newItem
            )
            .then((data) => {
              if (data.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  return (
    <div className="w-full px-8">
      <SectionTitle
        subHeading={"What`s new?"}
        heading={"Add an Item"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-stone-300 p-5 rounded-xl"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">Recipe Name*</label>
          <input
            {...register("name", { required: true, maxLength: 80 })}
            type="text"
            placeholder="recipe name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <label className="label">Category*</label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                category
              </option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Price*</label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="$"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">Recipe Detail*</label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-32"
            placeholder="recipe in detail"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">Image*</label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <input className="btn btn-primary " type="submit" value="Add Item" />
      </form>
      <div className="mt-5">
        <p>*required inputs</p>
      </div>
    </div>
  );
};

export default AddItem;

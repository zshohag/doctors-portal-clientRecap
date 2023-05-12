import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Home/Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const handleAddDoctor = (data) => {
    /*  console.log(data); */

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        //console.log(imgData);

        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          //console.log(doctor);
          // SAVE DOCTOR INFORMATION TO THE DATABASE
          fetch("https://doctors-portal-server-rouge-one.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")} `,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-rouge-one.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();

      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" p-10 ">
      <h3 className="text-2xl mb-5 ">Add Doctor </h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control  ">
          <label className="label ">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name")}
            placeholder="name"
            type="text"
            className="input input-bordered   "
          />
        </div>

        <div className="form-control  ">
          <label className="label ">
            <span className="label-text  ">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email Address is required",
            })}
            placeholder="Your Email"
            type="email"
            className="input input-bordered"
          />
          <div>
            {errors.email && (
              <p role="alert" className="text-red-500 m-1 ">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div className="form-control  ">
          <label className="label ">
            <span className="label-text  ">Specialty</span>
          </label>
          <select
            {...register("specialty", {
              required: true,
            })}
            className="select  input-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          <div>
            {errors.password && (
              <p role="alert" className="text-red-500 m-1 ">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>

        <div className="form-control  ">
          <label className="label ">
            <span className="label-text">Image Upload</span>
          </label>
          <input
            {...register("image", {
              required: "Photo is Required",
            })}
            type="file"
            className="input input-bordered   "
          />
          {errors.image && (
            <p role="alert" className="text-red-500 m-1 ">
              {errors.image?.message}
            </p>
          )}
        </div>

        <div className="mt-2"></div>

        <input className="btn  w-full mb-2 " value="ADD DOCTOR" type="submit" />
      </form>
    </div>
  );
};

export default AddDoctor;

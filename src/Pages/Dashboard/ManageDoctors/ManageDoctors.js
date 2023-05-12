import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../Home/Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Home/Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-rouge-one.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")} `,
            },
          }
        );
        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);
    fetch(
      `https://doctors-portal-server-rouge-one.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")} `,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor.name} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl mb-5 ">Manage Doctors </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Image</th>
              <th> Name</th>
              <th> Specialty</th>
              <th> Email</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-success-content ">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>

                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.email}</td>

                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs "
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {deletingDoctor && (
          <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingDoctor.name}.It can't be undone `}
            successButtonName="Delete"
            successAction={handleDeleteDoctor}
            modaldata={deletingDoctor}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;

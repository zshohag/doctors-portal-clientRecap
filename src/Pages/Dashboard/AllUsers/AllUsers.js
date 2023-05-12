import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loading from "../../Home/Shared/Loading/Loading";
import ConfirmationModal from "../../Home/Shared/ConfirmationModal/ConfirmationModal";

const AllUsers = () => {
  // DELETE USER
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-rouge-one.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(
      `https://doctors-portal-server-rouge-one.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")} `,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfull");
          refetch();
        }
      });
  };

  // DELETE  A USER
  const handleDeleteUser = (user) => {
    console.log(user);
    fetch(
      `https://doctors-portal-server-rouge-one.vercel.app/users/${user._id}`,
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
          toast.success(`User ${user.name} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl mb-5 ">All Users </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Name</th>
              <th> Email</th>
              <th> Admin</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs  "
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs "
                  >
                    Delete
                  </label>
                  {/* <button onClick={()=> handleDeleteUser(user) } className="btn btn-xs  "> Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {deletingUser && (
          <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingUser.name}.It can't be undone `}
            successButtonName="Delete"
            successAction={handleDeleteUser}
            modaldata={deletingUser}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default AllUsers;

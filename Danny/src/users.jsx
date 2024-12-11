import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState("");

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        setError("No se encontraron usuarios.");
      }
    } catch (error) {
      console.error("Error al cargar los usuarios:", error.message);
      setError(
        `Hubo un error al cargar los usuarios: ${error.response ? error.response.data.error : error.message
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error al eliminar usuario:", error.message);
      setError(
        `Hubo un error al eliminar el usuario: ${error.response ? error.response.data.error : error.message
        }`
      );
    }
  };

  const startEdit = (user) => {
    setEditingUser(user);
    setNewName(user.nombre);
  };

  const handleEdit = async () => {
    if (!editingUser) return;

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:3000/api/users/${editingUser._id}`,
        { nombre: newName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(
        users.map((user) =>
          user._id === editingUser._id ? { ...user, nombre: newName } : user
        )
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Error al editar usuario:", error.message);
      setError(
        `Hubo un error al editar el usuario: ${error.response ? error.response.data.error : error.message
        }`
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg>;
  }

  return (
    <div className="relative overflow-x-auto flex flex-col items-center dark:bg-violet-500 w-full mx-8 rounded-lg mt-8">
      <div className="flex items-center justify-between  flex-wrap md:flex-row space-y-4 mt-4 md:space-y-0 pb-4 rounded-t-lg">
        <h2 className="text-2xl font-semibold text-center text-black">
          User List
        </h2>
      </div>

      {error && <p className="text-center text-violet-500 font-semibold">{error}</p>}

      <table className="w-full text-sm text-left rtl:text-right  text-black">
        <thead className=" dark:bg-violet-500 border-t border-b border-black">
          <tr className="">
            <th scope="col" className="px-6 py-3 text-black">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Edit
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user._id}
                className=" border-b dark:bg-white dark:border-black dark:hover:bg-violet-500 "
              >
                <td className="px-6 py-4">{user.nombre}</td>
                <td className="px-6 py-4">{user.correo}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => startEdit(user)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M2 24v-4h20v4zm4-8h1.4l7.8-7.775l-.725-.725l-.7-.7L6 14.6zm-2 2v-4.25L15.2 2.575q.275-.275.638-.425T16.6 2t.775.15t.675.45L19.425 4q.3.275.438.65t.137.775q0 .375-.137.738t-.438.662L8.25 18zM18 5.4L16.6 4zm-2.8 2.825l-.725-.725l-.7-.7z" /></svg>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M5 19q-.825 0-1.412-.587T3 17V8q-.425 0-.712-.288T2 7t.288-.712T3 6h3v-.5q0-.425.288-.712T7 4.5h2q.425 0 .713.288T10 5.5V6h3q.425 0 .713.288T14 7t-.288.713T13 8v9q0 .825-.587 1.413T11 19zm11-1q-.425 0-.712-.288T15 17t.288-.712T16 16h2q.425 0 .713.288T19 17t-.288.713T18 18zm0-4q-.425 0-.712-.288T15 13t.288-.712T16 12h4q.425 0 .713.288T21 13t-.288.713T20 14zm0-4q-.425 0-.712-.288T15 9t.288-.712T16 8h5q.425 0 .713.288T22 9t-.288.713T21 10z" /></svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                There are no users available.
              </td>
            </tr>
          )}
        </tbody>
      </table >
      {
        editingUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 p-4 rounded-lg shadow-lg">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border rounded p-2 w-full mb-4 text-black"
              />
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-violet-400  dark:hover:bg-violet-700 text-white rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 bg-gray-400  dark:hover:bg-gray-700 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )
      }
    </div >
  );
}

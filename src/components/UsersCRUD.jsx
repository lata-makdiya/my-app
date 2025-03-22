import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../api';
import UserForm from './UserForm.jsx';

const UsersCRUD = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const getUsers = async () => {
        const { data } = await fetchUsers();
        setUsers(data);
    };

    const handleAddUser = async (user) => {
        await createUser(user);
        getUsers();
    };

    const handleEditUser = async (user) => {
        editingUser.name = user.name;
        editingUser.email = user.email;
        await updateUser(editingUser.id, editingUser);
        setEditingUser(null);
        getUsers();
    };

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h1>User Management</h1>
            <UserForm
                onSubmit={editingUser ? handleEditUser : handleAddUser}
                editingUser={editingUser}
            />
            <ul>
                {users.map((user) => (
                    <li key={user.id} style={{ marginTop: '5px' }}>
                        {user.id} - {user.name} - {user.email}
                        <button style={{ marginLeft: '5px' }} onClick={() => setEditingUser(user)}>Edit</button>
                        <button style={{ marginLeft: '5px' }} onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersCRUD;

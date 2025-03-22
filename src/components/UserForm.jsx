import React, { useEffect, useState } from 'react';

const UserForm = ({ onSubmit, editingUser }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    useEffect(() => {
        if (editingUser) {
            setFormData({
                name: editingUser.name,
                email: editingUser.email,
                password: '', // Password is left blank for security
            });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', email: '', password: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            {!editingUser && (
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            )}
            <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
        </form>
    );
};

export default UserForm;

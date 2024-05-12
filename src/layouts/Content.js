import React from 'react'
import Route1 from '../practice/Router/Route1'
import Dashboard from '../content/Dashboard'
import User from '../practice/Router/User'
import { Route, Router, Routes, Switch } from 'react-router-dom'
import UserDetails from '../practice/Router/UserDetails';
import FormValidationDemo from '../practice/FormValidationDemo'
import HttpRequestComponent from '../practice/http_requests/HttpRequestComponent'
import Post from '../practice/http_requests/Post'
import Form from '../practice/Redux/Form'
import TodoList from '../practice/todo/TodoList'
import PracticeForm from '../practice/form/Form'
import FormDataPage from '../practice/form/FormDataPage'
 
export default function Content() {
    return (
        <main style={{ marginTop: "58px" }}>
            <div className="container pt-4">
                <Routes>
                    <Route path="*" element={<Route1 />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/posts" element={<HttpRequestComponent />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="users/:id" element={<UserDetails />} />
                    <Route path="/form-validation" element={<FormValidationDemo />} />
                    <Route path="/redux-form" element={<Form />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/form" element={<PracticeForm />} />
                    <Route path="/form-data-page" element={<FormDataPage />} />
                </Routes>
            </div>
        </main>
    )
}

import { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    Link,
} from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import UserDashboard from "./components/pages/UserDashboard";
import Rotlayout from "./components/layout/Rotlayout";
import IqTest from "./components/pages/IqTest";
import Exam from "./components/pages/Exam";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Result from "./components/pages/Result";
import Show from "./components/pages/Show";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/user" element={<Rotlayout />}>
                <Route path="deshboard" element={<UserDashboard />}></Route>
                <Route path="iqtest" element={<IqTest />}></Route>
                <Route path="exam" element={<Exam />}></Route>
                <Route path="result" element={<Result />}></Route>
                <Route path="show" element={<Show />}></Route>
            </Route>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    );
}

export default App;

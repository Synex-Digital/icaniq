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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/user" element={<Rotlayout />}>
                <Route path="deshboard" element={<UserDashboard />}></Route>
                <Route path="iqtest" element={<IqTest />}></Route>
            </Route>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

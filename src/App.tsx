import React from 'react';
import {observer} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Main from "./components/Main";
import DefaultLayout from "./layouts/DefaultLayout";
import History from "./components/History";
import Logout from "./components/Logout";
import PizzaForm from "./components/PizzaForm";
import {IPizzaDetailed} from "./data/Pizza";
import LocalStorage from "./store/PizzaStore";

const App: React.FC = observer(() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <DefaultLayout>
                            <Main />
                        </DefaultLayout>
                    </ProtectedRoute>
                } />
                <Route path="/pizza/new" element={
                    <ProtectedRoute>
                        <DefaultLayout>
                            <PizzaForm createPizza={(item:IPizzaDetailed)=>LocalStorage.createNewPizza(item)} />
                        </DefaultLayout>
                    </ProtectedRoute>
                } />
                <Route path="/history" element={
                    <ProtectedRoute>
                        <DefaultLayout>
                            <History />
                        </DefaultLayout>
                    </ProtectedRoute>
                } />
                <Route path="/login" element={
                    <Login />
                } />
                <Route path="/logout" element={
                    <Logout />
                } />
            </Routes>
        </BrowserRouter>
    );
})

export default App;
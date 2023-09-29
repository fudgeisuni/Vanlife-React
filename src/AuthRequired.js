import React from "react";
import {Outlet, Navigate} from "react-router-dom"
import "./style.css";

export default function AuthRequired() {
  const isLoggedIn = false;
  if(!isLoggedIn){
    return <Navigate to="/login" />
  }
  return <Outlet />
}
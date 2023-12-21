import React from 'react'
import { Route, Routes,Navigate,Outlet } from "react-router-dom";
import Layout from "../layout";
import { ProtectedRoutes, PublicRoutes } from "@/core/routes";
import { privateRoutes, publicRoutes, sharedRoutes } from "./routesList";


type routeType={
  path:string,
  element:React.LazyExoticComponent<() => JSX.Element>
}


const Router = () => {

  const withRoute = (routes:routeType[]) => {
    return routes.map((route) => (
      <Route path={route.path} element={<route.element />} key={route.path} />
    ));
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
       <Route element={<Layout><PublicRoutes /></Layout>}>{withRoute(publicRoutes)}</Route>
       <Route element={<Layout><ProtectedRoutes /></Layout>}>{withRoute(privateRoutes)}</Route>
       <Route element={<Layout><Outlet /></Layout>}>{withRoute(sharedRoutes)}</Route>
    </Routes>
  )
}

export default Router

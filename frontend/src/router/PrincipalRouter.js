import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BlogHome } from "../components/pages/BlogHome";
import { BlogPost } from "../components/pages/BlogPost";
import { EditPost } from "../components/pages/EditPost";
import { NewPost } from "../components/pages/NewPost";
import { NavComponent } from "../components/layout/NavComponent";
import { FooterComponent } from "../components/layout/FooterComponent";


export const RouterPrincipal = () => {
 
  return (
    <div>
      <BrowserRouter>
      <NavComponent />
        <Routes>
          <Route
            path="/"
            element={<BlogHome />}
          />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route
            path="/post/editar"
            element={<EditPost />}
          />
          <Route path="/post/nuevo" element={<NewPost/>} />
         
        </Routes>
       <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

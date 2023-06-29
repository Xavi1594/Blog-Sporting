import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";


export const RouterPrincipal = () => {
 
  return (
    <div>
      <BrowserRouter>
        {loggedIn ? (
          <NavbarComponent
            loggedIn={loggedIn}
            isAdmin={isAdmin}
            onLogout={handleLogout}
          />
        ) : (
          <NotLoggedNavbarComponent onLogout={handleLogout} />
        )}
        <Routes>
          <Route
            path="/"
            element={<LoginFormComponent onLogin={handleLogin} />}
          />
          <Route path="/registro" element={<RegisterFormComponent />} />
          <Route
            path="/perfil"
            element={<ProfileComponent loggedIn={loggedIn} />}
          />
          <Route path="/amigos" element={<FriendsComponent />} />
          <Route path="/amigosagregados" element={<FriendsAddedComponent />} />
          {loggedIn && (
            <Route
              path="/posts"
              element={<PostComponent loggedIn={loggedIn} />}
            />
          )}
          <Route
            path="/amigos/:userId"
            element={<OtherProfilesComponent loggedIn={loggedIn} />}
          />

          <Route path="/usuarios" element={<UsuariosComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

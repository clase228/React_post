import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { User } from "./pages/user";
import { AboutMe } from "./pages/about";
// import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./components/protected-route";
export const AppRoutes = () => {
  return (
    <Routes>
    
      <Route path="/"  element={<Main />} />
      <Route path="/aboutme"  element={<AboutMe />} />
      <Route path="/user/:id"  element={<User />} />
    
  
     
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
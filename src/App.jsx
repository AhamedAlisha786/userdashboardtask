import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/context/UserContext.jsx";
import Index from "./pages/index.jsx";
import UserDetails from "./pages/UserDetails.jsx";
// import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user/:id" element={<UserDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </UserProvider>
);

export default App;

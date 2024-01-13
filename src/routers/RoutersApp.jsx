import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewLogin from "../views/ViewLogin";

function RoutersApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<ViewLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutersApp;

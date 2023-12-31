import Home from "./views/Home/Home";
import { Events } from "./views/Events/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./views/LayoutMain";
import EventDetails from "./views/EventDetails/EventDetails";
function App() {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
      </LayoutMain>
    </BrowserRouter>
  );
}

export default App;

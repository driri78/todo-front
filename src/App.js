import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoPage from "./pages/TodoPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />}>
            <Route index element={<TodoPage />} />
            <Route path=":date" element={<TodoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

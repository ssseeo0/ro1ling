import Header from "components/common/Header";
import MainPage from "pages/MainPage";
import NotFoundPage from "pages/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="list" element={<>list</>} />
        <Route path="post">
          <Route index element={<>post</>} />
          <Route path=":postId">
            <Route index element={<>rolling</>} />
            <Route path="message" element={<>message</>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

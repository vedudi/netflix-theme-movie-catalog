import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import DetailPages from "./pages/DetailPages"
import Header from "./components/Header"


const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen text-white bg-[#242424] p-5 md:p-10 lg:p-15 xl:p-20">
       <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/movie/:id" element={<DetailPages/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
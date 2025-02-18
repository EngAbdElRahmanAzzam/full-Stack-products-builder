import { Outlet } from "react-router-dom"
import Header from "../compontents/ui/header"
import Footer from "../compontents/ui/footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default MainLayout
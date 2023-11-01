import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Title } from "./Title/Title"

const Layout = () => {

  return (
    <>
      <Header />
      <Title />
      <main style={{ flex: '1 1 auto'}}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default Layout
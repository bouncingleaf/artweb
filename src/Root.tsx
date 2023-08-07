import Footer from './Footer/Footer';
import {
  Outlet,
} from "react-router-dom";

import './App.css'

function Root() {

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Root

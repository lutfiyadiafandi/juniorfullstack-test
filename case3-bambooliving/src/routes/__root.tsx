import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
});

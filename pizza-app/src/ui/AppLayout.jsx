import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const loader = useNavigation().state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {loader && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

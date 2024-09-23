// import "./index.css";

import { Account } from "./components/Account";
import { Connect } from "./components/Connect";
import { ERC20 } from "./components/ERC20";
import { NetworkSwitcher } from "./components/NetworkSwitcher";

import Navbar from "./components/Navbar";

import Reward from "./components/Reward";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./pages/Dashboard/Layout";
import Landing from "./pages/Landing";

import Register from "./pages/Register";
import Wallet from "./pages/Dashboard/Wallet";
import Settings from "./pages/Dashboard/Settings";
import ErrorPage from "./pages/ErrorPage";
import Marketplace from "./pages/Dashboard/Marketplace";
import { Home } from "./components/dashboard";
import Profile from "./pages/Dashboard/Profile";
import Recycle from "./pages/Dashboard/Deposit";
import { Toaster } from "sonner";
import CreateEvent from "./pages/Dashboard/CreateEvent";
import MyEvents from "./pages/Dashboard/MyEvents";
import SingleEvent from "./pages/Dashboard/SingleEvent";
import CreateAdmin from "./pages/Dashboard/CreateAdmin";
import Stats from "./components/dashboard/home/Stats";
import { useWasteWiseContext } from "./context";
import NoPage from "./pages/NoPage";
import UnauthenticatedPage from "./pages/Unauthenticated";

export { PrivateRoute };

function PrivateRoute({ children }: { children: any }) {
  const { currentUser } = useWasteWiseContext();
  // const { user: authUser } = useSelector(((x)) => x.auth);

  if (!currentUser) {
    // not logged in so redirect to login page with the return url
    // return <Route path="" element={<NoPage />} />;
    return <Navigate to="/unauthenticated" />;
  }

  // authorized so return child components
  return children;
}

export function App() {
  // const isAuthenticated = true;

  return (
    <section className="relative w-full h-screen overflow-x-hidden overflow-y-auto">
      <div className="block relative">
        <Toaster
          theme="system"
          // className="toaster-elem"
          position="top-right"
          toastOptions={{
            style: {
              // position: "relative",
              // background: "green",
              top: "60px",
              // right: "40px",
            },
          }}
          // offset={72}
          richColors={true}
          gap={6}
          closeButton={true}
        />
      </div>
      {/* <div className="shadow bg-base-100 fixed bottom-2 right-2 z-10 rounded-box">
        <label className="swap swap-rotate w-16 h-16 lg:hidden">
          <input type="checkbox" className="theme-controller" value="dark" />

          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
            errorElement={<ErrorPage />}
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
            errorElement={<ErrorPage />}
          >
            <Route path="" element={<Home />} />
            <Route path="leaderboard" element={<Stats />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recycle" element={<Recycle />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="purchases" element={<MyEvents />} />
            <Route path="createAdmin" element={<CreateAdmin />} />
            <Route path="marketplace/event/:id" element={<SingleEvent />} />
          </Route>
          {/* <Route
          path="/Login"
          element={<Login />}
        ></Route> */}
          <Route path="unauthenticated" element={<UnauthenticatedPage />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
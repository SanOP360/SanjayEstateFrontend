import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Signin = React.lazy(() => import("./pages/Signin"));
const About = React.lazy(() => import("./pages/About"));
const Profile = React.lazy(() => import("./pages/Profile"));
const CreateListing = React.lazy(() => import("./pages/CreateListing"));
const UpdateListing = React.lazy(() => import("./pages/UpdateListing"));
const Listing = React.lazy(() => import("./pages/Listing"));
const Search = React.lazy(() => import("./pages/Search"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:listingId" element={<Listing />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route
              path="/update-listing/:listingId"
              element={<UpdateListing />}
            />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

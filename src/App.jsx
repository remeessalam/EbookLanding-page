import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ebook from "./Pages/Ebook";
import { Suspense } from "react";
import "keen-slider/keen-slider.min.css";
import EbookLoadingSpinner from "./Components/EbookLoadingSpinner";
import SpinnerContextProvider from "./Components/EbookSpinnerContext";
import { Toaster } from "react-hot-toast";
// App component with routing
const App = () => {
  return (
    <SpinnerContextProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#000000",
            color: "#ffffff",
          },
        }}
      />
      <Suspense fallback={<EbookLoadingSpinner />}>
        <Router>
          <Routes>
            <Route path="/" element={<Ebook />} />
          </Routes>
        </Router>
      </Suspense>
    </SpinnerContextProvider>
  );
};

export default App;

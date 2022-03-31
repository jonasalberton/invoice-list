import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceDetails from "./pages/InvoiceDetails";
import InvoiceList from "./pages/InvoiceList";

function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="invoice/:id" element={<InvoiceDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
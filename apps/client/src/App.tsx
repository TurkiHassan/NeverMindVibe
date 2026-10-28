import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/Index";
import NotFound from "./pages/not-found/Index";
import Atlas from "./pages/atlas/Atlas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Atlas />} />
          <Route path="/ar/*" element={<Atlas />} />
          <Route path="/arc" element={<Atlas />} />
          <Route path="/orbit" element={<Atlas />} />
          <Route path="/moss" element={<Atlas />} />
          <Route path="/pulse" element={<Atlas />} />
          <Route path="/ledger" element={<Atlas />} />
          <Route path="/atelier" element={<Atlas />} />
          <Route path="/signal" element={<Atlas />} />
          <Route path="/tactile" element={<Atlas />} />
          <Route path="/drift" element={<Atlas />} />
          <Route path="/kernel" element={<Atlas />} />
          <Route path="/pantry" element={<Atlas />} />
          <Route path="/root" element={<Atlas />} />
          <Route path="/frame" element={<Atlas />} />
          <Route path="/civic" element={<Atlas />} />
          <Route path="/current" element={<Atlas />} />
          <Route path="/loop" element={<Atlas />} />
          <Route path="/haven" element={<Atlas />} />
          <Route path="/spark" element={<Atlas />} />
          <Route path="/field" element={<Atlas />} />
          <Route path="/cinder" element={<Atlas />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

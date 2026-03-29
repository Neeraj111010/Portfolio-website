import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// Detect base path from current URL
const getBasename = () => {
  const pathname = window.location.pathname;
  
  // If the pathname starts with /Portfolio-website, use it as the base
  if (pathname.includes('/Portfolio-website')) {
    return '/Portfolio-website/';
  }
  
  // Otherwise use root
  return '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="glasses-erp-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="inventory" element={<div className="p-6">庫存管理頁面開發中...</div>} />
              <Route path="customers" element={<div className="p-6">客戶管理頁面開發中...</div>} />
              <Route path="orders" element={<div className="p-6">訂單管理頁面開發中...</div>} />
              <Route path="suppliers" element={<div className="p-6">供應商管理頁面開發中...</div>} />
              <Route path="prescriptions" element={<div className="p-6">處方管理頁面開發中...</div>} />
              <Route path="employees" element={<div className="p-6">員工管理頁面開發中...</div>} />
              <Route path="reports" element={<div className="p-6">財務報表頁面開發中...</div>} />
              <Route path="pos" element={<div className="p-6">POS銷售頁面開發中...</div>} />
              <Route path="settings" element={<div className="p-6">系統設定頁面開發中...</div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

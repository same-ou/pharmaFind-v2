import { Outlet } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
  <>
    <AuthProvider>
      <ThemeProvider
       defaultTheme="light" 
       storageKey="vite-ui-theme">
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </>
  );
};

export default App;

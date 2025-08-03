import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="flex h-screen pradeep">
          {/* Sidebar */}
          <aside className="bg-bk-50 p-0 sm:p-4">
            <Sidebar />
          </aside>
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";
import Chatbot from "./Chatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`flex flex-col min-h-screen bg-gray-50`}>
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProp {
  className?: string;
  children: ReactNode;
}

const queryClient = new QueryClient();
const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
export default Layout;

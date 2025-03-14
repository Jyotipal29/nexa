import React from "react";
import Navigation from "@/components/site/Navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <ClerkProvider appearance={{ baseTheme: dark }}>
        <Navigation />
        {children}
      </ClerkProvider>
    </main>
  );
};

export default layout;

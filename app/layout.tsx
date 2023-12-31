import Navbar from "@/components/Navbar";
import { inter, kronaOne } from "./fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${kronaOne.variable}  `}>
          <Theme
            accentColor="teal"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
            appearance="dark"
            className="max-w-6xl mx-auto"
          >
            <Navbar />
            {children}
            <Footer />
          </Theme>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

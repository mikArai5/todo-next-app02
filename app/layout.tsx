import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseListener from "./components/supabase-listener";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Next Todo App",
  description: "Next Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* @ts-expect-error next version of TS will fix this */}
          <SupabaseListener />
          <main className="flex-1 container max-w-screen-sm mx-auto px-1 py-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

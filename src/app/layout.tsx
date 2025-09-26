import Sidebar from "@/shared/components/sidebar";
import "./globals.css";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="PT-br">
      <body className="h-screen w-screen">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
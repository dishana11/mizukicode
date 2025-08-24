import { ThemeProvider } from "@/lib/themeContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark accent-crimson font-geist bg-gradient-theme chatinput-default">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

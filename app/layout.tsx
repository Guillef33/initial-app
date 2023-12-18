import "./globals.css";
import { ThemeProvider } from "@/providers/index";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "App de ingresos y gastos",
  description: "Mejora el control de tus finanzasVamos con Fernando para aprender bien Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

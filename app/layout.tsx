import "./globals.css";
import { ThemeProvider } from "@/providers/index";

export const metadata = {
  title: "Curso Next.js por Fernando Herrera",
  description: "Vamos con Fernando para aprender bien Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

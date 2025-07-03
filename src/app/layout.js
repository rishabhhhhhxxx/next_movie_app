import Header from "@/components/Header";
import "./globals.css";
import ThemeCom from "@/components/ThemeCom";

export const metadata = {
  title: "MovieMeter",
  description: "Find the top-rated movies in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        
          <Header />
          {children}
        
      </body>
    </html>
  );
}

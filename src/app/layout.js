import "./globals.css";

export const metadata = {
  title: "DevFleets",
  description: "LogisTech by DevPOLer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

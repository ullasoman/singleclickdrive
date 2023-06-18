import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Singleclick Drive | Best Car Rental Service in UAE",
  description: "rent a car dubai, car rentals dubai, rent a car uae, rent a car in dubai, rent a car abu dhabi, rent a car sharjah, car rentals dubai airport, car rentals sharjah airport, monthly car rentals dubai, cheap car rentals dubai, zero deposit on long term car rentals uae",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

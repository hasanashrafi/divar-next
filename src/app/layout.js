import "./globals.css";
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({ 
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: "Divar ",
  description: "A Divar-like classified ads platform",
  icons: {
    icon: '/divar.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="bg-gray-100">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
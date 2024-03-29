import '@/app/ui/global.css';
import { poppins } from '@/app/ui/fonts';
import { Footer } from './ui/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

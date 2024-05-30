
import '../globals.css'

export const metadata = {
  title: 'Your Cart',
  description: 'Get your Cart Products. Check out your cart products.',
}

export default function RootLayout({ children }) {
  return (
    <main>
        {children}
    </main>
  );
}

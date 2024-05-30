
import '../globals.css'

export const metadata = {
  title: 'Your Watch Lists',
  description: 'Get your WatchLists.',
}

export default function RootLayout({ children }) {
  return (
    <main>
        {children}
    </main>
  );
}

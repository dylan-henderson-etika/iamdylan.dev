// RootLayout.tsx
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Dylan Henderson',
  description:
    'Dylan Henderson is a software engineer based in Melbourne, VIC.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: 'auto 1fr auto', // Header, content, footer
              minHeight: '100vh',
            }}
          >
            <NavigationBar />
            <Box component="main">{children}</Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}

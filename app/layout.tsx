export const metadata = {
  title: 'Vocal Coach Pro',
  description: 'Plateforme de coaching vocal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

import PageIllustration from '@/components/page-illustration'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grow">

      <PageIllustration />

      {children}

    </main>
  )
}
import Header from "@/components/Header"
import ThemeAtTop from "@/components/ThemeAtTop"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeAtTop theme="dark">
        <Header />
      </ThemeAtTop>
      {children}
    </>
  )
}

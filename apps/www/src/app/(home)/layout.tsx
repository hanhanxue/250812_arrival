import Header from "@/components/Header"
import AtTop from "@/components/AtTop"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AtTop>
        <Header />
      </AtTop>
      {children}
    </>
  )
}

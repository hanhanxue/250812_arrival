import HeaderA from "@/components/HeaderA"
import AtTop from "@/components/AtTop"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AtTop>
        <HeaderA />
      </AtTop>
      {children}
    </>
  )
}

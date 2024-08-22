import Hero from "@/components/home/Hero"
import { auth } from "@/auth"
import Info from "@/components/shared/Info"

export default function Home() {
  const session = auth()
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-row w-full items-center justify-between flex-1 border-blue-900">
          <div>
            Expenzo
          </div>
          <div>
            <Info />
          </div>
        </div>
        <Hero />
      </main>
    </>
  )
}

import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

function AppLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
       <Sidebar/>
       <div className="flex flex-col">
       <Header />
       <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
       {children}
       </main>
       </div>
    </div>
  )
}

export default AppLayout

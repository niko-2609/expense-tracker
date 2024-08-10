import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

function AppLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
       <Sidebar/>
       <div className="flex flex-col">
       <Header />
       {children}
       </div>
    </div>
  )
}

export default AppLayout

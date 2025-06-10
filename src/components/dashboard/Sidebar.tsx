"use client"

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Moon, Clock, HelpCircle } from 'lucide-react'

export function Sidebar() {
  const sidebarItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    initials: `U${i + 1}`,
    online: i < 3
  }))

  return (
    <aside className="w-16 bg-black border-r border-gray-800 flex flex-col items-center py-4 space-y-3">
      {/* User Avatars */}
      <div className="flex flex-col space-y-3">
        {sidebarItems.map((item) => (
          <Avatar
            key={item.id}
            className={`w-10 h-10 cursor-pointer transition-all hover:scale-110 ${
              item.online ? 'ring-2 ring-green-500' : 'opacity-60'
            }`}
          >
            <AvatarFallback className="bg-gray-600 text-white text-xs">
              {item.initials}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      
      {/* Bottom Actions */}
      <div className="flex-1"></div>
      <div className="flex flex-col space-y-3">
        <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
          <Moon className="w-4 h-4 text-gray-400" />
        </Button>
        <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
          <Clock className="w-4 h-4 text-gray-400" />
        </Button>
        <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </Button>
      </div>
    </aside>
  )
}
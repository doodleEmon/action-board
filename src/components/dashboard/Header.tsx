"use client"

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Header() {
  return (
    <header className="bg-black border-b border-gray-800 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white text-base">Munshi Group / Action-Board</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Avatar className="w-8 h-8 border-2 border-pink-500">
              <AvatarFallback className="bg-pink-500 text-white text-xs">U1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-pink-500">
              <AvatarFallback className="bg-pink-500 text-white text-xs">U2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-pink-500">
              <AvatarFallback className="bg-pink-500 text-white text-xs">U3</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-auto">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-gray-700">
              Overview
            </TabsTrigger>
            <TabsTrigger value="priority" className="text-white data-[state=active]:bg-gray-700">
              Priority
            </TabsTrigger>
            <TabsTrigger value="activity" className="text-white data-[state=active]:bg-gray-700">
              Activity
            </TabsTrigger>
            <TabsTrigger value="analysis" className="text-white data-[state=active]:bg-gray-700">
              Analysis
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
          <Avatar className="w-8 h-8 border-2 border-pink-500">
            <AvatarFallback className="bg-pink-500 text-white text-xs">ME</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
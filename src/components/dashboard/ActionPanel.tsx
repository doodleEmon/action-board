"use client"

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Loader2, CheckCircle, Circle, AlertCircle } from 'lucide-react'

interface Action {
  id: number
  title: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
  userId: number
}

interface ServerAction {
  id: number
  title: string
  completed: boolean
  userId: number
}

interface StaticAction {
  id: number
  title: string
  body: string
  userId: number
}

const fetchClientActions = async (): Promise<ServerAction[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

const fetchStaticPosts = async (): Promise<StaticAction[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

const serverActions: Action[] = [
  { id: 1, title: "Review Q4 financial reports", completed: false, priority: 'high', userId: 1 },
  { id: 2, title: "Schedule team meeting", completed: true, priority: 'medium', userId: 2 },
  { id: 3, title: "Update project documentation", completed: false, priority: 'low', userId: 3 },
  { id: 4, title: "Code review for API endpoints", completed: true, priority: 'high', userId: 1 },
  { id: 5, title: "Prepare presentation slides", completed: false, priority: 'medium', userId: 4 },
  { id: 6, title: "Database optimization", completed: false, priority: 'high', userId: 2 },
  { id: 7, title: "Client feedback analysis", completed: true, priority: 'low', userId: 3 },
]

export function ActionPanel() {
  const [activeTab, setActiveTab] = useState('ssr')

  const { data: clientActions, isLoading: clientLoading, error: clientError } = useQuery({
    queryKey: ['clientActions'],
    queryFn: fetchClientActions,
    enabled: activeTab === 'csr'
  })

  const { data: staticActions, isLoading: staticLoading } = useQuery({
    queryKey: ['staticActions'],
    queryFn: fetchStaticPosts,
    enabled: activeTab === 'isr',
    staleTime: 60000,
    gcTime: 300000,
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

const renderActionItem = (
  action: Action | ServerAction | StaticAction, 
  type: 'server' | 'client' | 'static'
) => {
  const isCompleted = type === 'static'
    ? false
    : 'completed' in action
      ? action.completed
      : false
  const title = type === 'static' ? action.title.substring(0, 40) + '...' : action.title
  const priority = type === 'server' ? (action as Action).priority : 'medium'

  return (
    <div key={action.id} className="flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
      {isCompleted ? (
        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
      ) : (
        <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <p className={`text-sm ${isCompleted ? 'line-through text-gray-500' : 'text-gray-200'}`}>
          {title}
        </p>
        {type === 'static' && (
          <p className="text-xs text-gray-500 mt-1">Post ID: {action.id} | User: {action.userId}</p>
        )}
      </div>
      {type === 'server' && (
        <Badge className={`text-xs ${getPriorityColor(priority)}`}>
          {priority}
        </Badge>
      )}
      <span className="text-xs text-gray-500">#{action.id}</span>
    </div>
  )
}

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-white mb-1">Action Panel</h2>
        <p className="text-sm text-gray-400">Demonstrating SSR, CSR & ISR</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4 bg-gray-800 border-gray-700">
          <TabsTrigger value="ssr" className="text-xs data-[state=active]:bg-gray-700">
            SSR
            <Badge className="ml-2 bg-blue-500/20 text-blue-400 text-xs">Server</Badge>
          </TabsTrigger>
          <TabsTrigger value="csr" className="text-xs data-[state=active]:bg-gray-700">
            CSR
            <Badge className="ml-2 bg-green-500/20 text-green-400 text-xs">Client</Badge>
          </TabsTrigger>
          <TabsTrigger value="isr" className="text-xs data-[state=active]:bg-gray-700">
            ISR
            <Badge className="ml-2 bg-purple-500/20 text-purple-400 text-xs">Static</Badge>
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-hidden">
          {/* SSR Content */}
          <TabsContent value="ssr" className="h-full m-0 p-4">
            <div className="mb-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium text-blue-400">Server-Side Rendered</span>
              </div>
              <p className="text-xs text-gray-500">Data fetched on server, sent with HTML</p>
            </div>
            <div className="space-y-1 max-h-[400px] overflow-y-auto">
              {serverActions.map(action => renderActionItem(action, 'server'))}
            </div>
          </TabsContent>

          {/* CSR Content */}
          <TabsContent value="csr" className="h-full m-0 p-4">
            <div className="mb-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-green-400">Client-Side Rendered</span>
              </div>
              <p className="text-xs text-gray-500">Data fetched in browser with TanStack Query</p>
            </div>
            
            {clientLoading ? (
              <div className="flex items-center justify-center h-32">
                <Loader2 className="w-6 h-6 animate-spin text-green-400" />
                <span className="ml-2 text-sm text-gray-400">Fetching actions...</span>
              </div>
            ) : clientError ? (
              <div className="flex items-center justify-center h-32">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <span className="ml-2 text-sm text-red-400">Failed to load actions</span>
              </div>
            ) : (
              <div className="space-y-1 max-h-[400px] overflow-y-auto">
                {clientActions?.map(action => renderActionItem(action, 'client'))}
              </div>
            )}
          </TabsContent>

          {/* ISR Content */}
          <TabsContent value="isr" className="h-full m-0 p-4">
            <div className="mb-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium text-purple-400">Incremental Static Regeneration</span>
              </div>
              <p className="text-xs text-gray-500">Static at build, regenerated on-demand</p>
            </div>
            
            {staticLoading ? (
              <div className="flex items-center justify-center h-32">
                <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                <span className="ml-2 text-sm text-gray-400">Loading static content...</span>
              </div>
            ) : (
              <div className="space-y-1 max-h-[400px] overflow-y-auto">
                {staticActions?.map(action => renderActionItem(action, 'static'))}
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
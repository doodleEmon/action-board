import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import ActionPanelSSR from "@/components/panels/ActionPanelSSR";
import ActionPanelCSR from "@/components/panels/ActionPanelCSR";
import ActionPanelISR from "@/components/panels/ActionPanelISR";

function ActionBoardPage() {
    return (
        <div className="flex h-screen bg-black text-white"> {/* Overall container */}
            {/* Action Panel (Left Sidebar) */}
            <div className="w-20 flex flex-col items-center py-4 space-y-4 border-r border-gray-800">
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-700 text-white hover:bg-gray-600">AB</Button>
                <div className="flex-grow flex flex-col justify-center space-y-4">
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                </div>
                <div className="flex flex-col space-y-4">
                    {/* Bottom icons */}
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className="flex items-center space-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="text-sm font-semibold cursor-pointer">Munshi Group / Action-Board</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 justify-start">
                                <DropdownMenuItem>Action Board</DropdownMenuItem>
                                <DropdownMenuItem>Calender</DropdownMenuItem>
                                <DropdownMenuItem>Action Analytics</DropdownMenuItem>
                                <DropdownMenuItem>Knowledge Base</DropdownMenuItem>
                                <DropdownMenuItem>Messenger</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {/* header tab list */}
                    <Tabs defaultValue="overview">
                        <TabsList className="rounded-md bg-none space-x-4">
                            <TabsTrigger value="overview" className="data-[state=active]:font-semibold data-[state=active]:text-white px-2 cursor-pointer">Overview</TabsTrigger>
                            <TabsTrigger value="priority" className="data-[state=active]:font-semibold data-[state=active]:text-white px-2 cursor-pointer">Priority</TabsTrigger>
                            <TabsTrigger value="activity" className="data-[state=active]:font-semibold data-[state=active]:text-white px-2 cursor-pointer">Activity</TabsTrigger>
                            <TabsTrigger value="analysis" className="data-[state=active]:font-semibold data-[state=active]:text-white px-2 cursor-pointer">Analysis</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="flex items-center space-x-2">
                        {/* Top right icons */}
                        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-gray-700 hover:bg-gray-600"></Button>
                        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-gray-700 hover:bg-gray-600"></Button>
                    </div>
                </div>

                <ResizablePanelGroup
                    direction="horizontal"
                    className="flex-1 rounded-lg border"
                >
                    {/* Left Panel (Optional) */}
                    <ResizablePanel defaultSize={20}>
                        <div className="p-4">Action Panel</div>
                        <Tabs defaultValue="ssr" className="space-y-4 p-4">
                            {/* Tab Triggers (Headers) */}
                            <TabsList className="grid grid-cols-3 w-full">
                                <TabsTrigger value="ssr" className="cursor-pointer">SSR</TabsTrigger>
                                <TabsTrigger value="csr" className="cursor-pointer">CSR</TabsTrigger>
                                <TabsTrigger value="isr" className="cursor-pointer">ISR</TabsTrigger>
                            </TabsList>

                            {/* Tab Contents (Dynamically Switched) */}
                            <TabsContent value="ssr">
                                <ActionPanelSSR />
                            </TabsContent>
                            <TabsContent value="csr">
                                <ActionPanelCSR />
                            </TabsContent>
                            <TabsContent value="isr">
                                <ActionPanelISR />
                            </TabsContent>
                        </Tabs>
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    {/* Main 2x2 Grid (Now Resizable) */}
                    <ResizablePanel defaultSize={60}>
                        <ResizablePanelGroup direction="vertical" className="h-full">
                            {/* Top Row */}
                            <ResizablePanel defaultSize={50}>
                                <ResizablePanelGroup direction="horizontal" className="h-full">
                                    <ResizablePanel defaultSize={50} className="bg-black p-4">
                                        <h3 className="text-sm font-semibold mb-2">ActionNotes</h3>
                                    </ResizablePanel>
                                    <ResizableHandle withHandle />
                                    <ResizablePanel defaultSize={50} className="bg-black p-4">
                                        <h3 className="text-sm font-semibold mb-2">Knowledge Base</h3>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>

                            <ResizableHandle withHandle />

                            {/* Bottom Row */}
                            <ResizablePanel defaultSize={50}>
                                <ResizablePanelGroup direction="horizontal" className="h-full">
                                    <ResizablePanel defaultSize={50} className="bg-black p-4">
                                        <h3 className="text-sm font-semibold mb-2">RolesAndMembers</h3>
                                    </ResizablePanel>
                                    <ResizableHandle withHandle />
                                    <ResizablePanel defaultSize={50} className="bg-black p-4">
                                        <h3 className="text-sm font-semibold mb-2">BoardGoals</h3>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    {/* Right Panel (Optional) */}
                    <ResizablePanel defaultSize={20}>
                        <div className="p-4">Chat UI</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}

export default ActionBoardPage;
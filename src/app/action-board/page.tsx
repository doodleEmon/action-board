import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import ActionPanelSSR from "@/components/panels/ActionPanelSSR";
import ActionPanelCSR from "@/components/panels/ActionPanelCSR";
import ActionPanelISR from "@/components/panels/ActionPanelISR";
import Link from "next/link";

function OverviewContent() {
    return (
        <ResizablePanelGroup direction="vertical" className="h-full">
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
    );
}

type SimpleTabContentProps = {
    tabName: string;
};

function SimpleTabContent({ tabName }: SimpleTabContentProps) {
    return (
        <div className="h-full bg-black p-4 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">{tabName}</h2>
        </div>
    );
}

function ActionBoardPage({ tab = "overview" }) {

    const renderMainContent = () => {
        switch (tab) {
            case 'overview':
                return <OverviewContent />;
            case 'priority':
                return <SimpleTabContent tabName="Priority" />;
            case 'activity':
                return <SimpleTabContent tabName="Activity" />;
            case 'analysis':
                return <SimpleTabContent tabName="Analysis" />;
            default:
                return <OverviewContent />;
        }
    };

    return (
        <div className="flex h-screen bg-black text-white">
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
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-gray-700 hover:bg-gray-600"></Button>
                </div>
            </div>

            <div className="flex-grow flex flex-col">
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
                    <div className="flex rounded-md bg-none space-x-4">
                        <Link href="/overview">
                            <button className={`px-2 py-1 cursor-pointer transition-colors ${
                                tab === 'overview' 
                                    ? 'font-semibold text-white' 
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}>
                                Overview
                            </button>
                        </Link>
                        <Link href="/priority">
                            <button className={`px-2 py-1 cursor-pointer transition-colors ${
                                tab === 'priority' 
                                    ? 'font-semibold text-white' 
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}>
                                Priority
                            </button>
                        </Link>
                        <Link href="/activity">
                            <button className={`px-2 py-1 cursor-pointer transition-colors ${
                                tab === 'activity' 
                                    ? 'font-semibold text-white' 
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}>
                                Activity
                            </button>
                        </Link>
                        <Link href="/analysis">
                            <button className={`px-2 py-1 cursor-pointer transition-colors ${
                                tab === 'analysis' 
                                    ? 'font-semibold text-white' 
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}>
                                Analysis
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-gray-700 hover:bg-gray-600"></Button>
                        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-gray-700 hover:bg-gray-600"></Button>
                    </div>
                </div>

                <ResizablePanelGroup
                    direction="horizontal"
                    className="flex-1 rounded-lg border"
                >
                    <ResizablePanel defaultSize={20}>
                        <div className="p-4">Action Panel</div>
                        <Tabs defaultValue="ssr" className="space-y-4 p-4">
                            <TabsList className="grid grid-cols-3 w-full">
                                <TabsTrigger value="ssr" className="cursor-pointer">SSR</TabsTrigger>
                                <TabsTrigger value="csr" className="cursor-pointer">CSR</TabsTrigger>
                                <TabsTrigger value="isr" className="cursor-pointer">ISR</TabsTrigger>
                            </TabsList>

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

                    <ResizablePanel defaultSize={60}>
                        {renderMainContent()}
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    <ResizablePanel defaultSize={20}>
                        <div className="p-4">Chat UI</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}

export default ActionBoardPage;
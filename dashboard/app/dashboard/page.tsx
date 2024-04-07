"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qRrcl7jFWFQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { CameraIcon } from "lucide-react";
import { VideoCapture } from "./_components/videoCapture";
import { DisplayContainer } from "./_components/displayContainer";
import { Simulation } from "./_components/simulation";
import { Vector3 } from "three";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Orders
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Shipments
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Locations
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search orders..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="w-full">
          <Tabs>
            <TabsList className="flex gap-4">
              <TabsTrigger value="overview">Container</TabsTrigger>
              <TabsTrigger value="sales">Content</TabsTrigger>
              <TabsTrigger value="visits">Simulation</TabsTrigger>
              <TabsTrigger value="referrals">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid items-start gap-4 md:grid-cols-2">
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <div className="flex flex-row items-center space-y-0">
                      <CardTitle className="text-sm font-medium">Live Camera</CardTitle>
                    </div>
                    <SettingsIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent className="flex items-center justify-center h-1/2 p-0">
                    <VideoCapture/>
                  </CardContent>
                </Card>
                <Card className="grid gap-2">
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <CardTitle className="text-sm font-medium">Text Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <div>Words</div>
                      <div className="ml-auto">100</div>
                    </div>
                    <div className="flex items-center">
                      <div>Characters</div>
                      <div className="ml-auto">500</div>
                    </div>
                    <div className="flex items-center">
                      <div>Sentences</div>
                      <div className="ml-auto">10</div>
                    </div>
                  </CardContent>
                  <div className="flex flex-col w-full justify-center items-center rounded-sm">
                  <DisplayContainer/>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sales">
            <div className="grid items-start gap-4 md:grid-cols-2">
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <div className="flex flex-row items-center space-y-0">
                      <CardTitle className="text-sm font-medium">Live Camera</CardTitle>
                    </div>
                    <SettingsIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center h-1/2 p-0">
                    <VideoCapture/>
                    <VideoCapture/>
                  </CardContent>
                </Card>
                <Card className="grid gap-2">
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <CardTitle className="text-sm font-medium">Text Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <div>Words</div>
                      <div className="ml-auto">100</div>
                    </div>
                    <div className="flex items-center">
                      <div>Characters</div>
                      <div className="ml-auto">500</div>
                    </div>
                    <div className="flex items-center">
                      <div>Sentences</div>
                      <div className="ml-auto">10</div>
                    </div>
                  </CardContent>
                  <div className="flex flex-col w-full justify-center items-center rounded-sm">
                  <DisplayContainer/>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="visits">
              <div className="flex items-center justify-center w-full p-4">
              <Card className="w-[90%] max-w-2xl">
                  <CardHeader>
                    <CardTitle>Simulation</CardTitle>
                    <Simulation container={new Vector3(10,15,40)} items={[{ position: new Vector3(5,5,5), size: new Vector3(5,5,5) },
                      { position: new Vector3(2,7,5), size: new Vector3(1,3,5) },{ position: new Vector3(0,5,5), size: new Vector3(1,3,2) },
                      { position: new Vector3(5,5,5), size: new Vector3(5,5,5) },{ position: new Vector3(3,5,8), size: new Vector3(5,2,5) },
                      { position: new Vector3(5,5,5), size: new Vector3(1,5,3) },{ position: new Vector3(5,5,12), size: new Vector3(1,5,5) }
                      ,{ position: new Vector3(5,12,5), size: new Vector3(5,7,5) }
                      
                    ]}/>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="referrals">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                    <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                    <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
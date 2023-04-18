import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid"
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        {/* logo */}
        <a href="/" className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="img"></Image>
        </a>

        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notification" Icon={BellIcon}/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>

        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img 
                className="w-10 h-10 rounded-full xl:mr-2" 
                src="https://images.news18.com/ibnlive/uploads/2022/07/chris-evans-16574444483x2.jpg?impolicy=website&width=510&height=356" 
                alt="user-image" 
            />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Steve Rogers</h4>
                <p className="text-gray-500">@onYourLeft</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}

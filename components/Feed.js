import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Steve Rogers",
            username: "iCanDoThisAllDay",
            userImg: "https://images.news18.com/ibnlive/uploads/2022/07/chris-evans-16574444483x2.jpg?impolicy=website&width=510&height=356",
            img: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgwMTcwMTY2NDQ1MTgx/poster.jpg",
            text: "Avengers Assemble",
            timestamp: "1 minute ago"
        },
        {
            id: "2",
            name: "Tony Stark",
            username: "iAmIronMan",
            userImg: "https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg",
            img: "https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&t=pvorg",
            text: "I am Iron Man",
            timestamp: "5 minutes ago"
        },
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5" />
            </div>
        </div>
        <Input />
        {
            posts.map(post => <Post key={post.id} post={post} />)
        }
    </div>
  )
}
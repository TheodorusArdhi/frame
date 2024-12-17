// import prisma from "@/lib/client";
// import { auth,User } from "@clerk/nextjs/server";
// import { Story } from "@prisma/client";
// import Image from "next/image";
// type StoryWithUser = Story & {
//   user: User;
// };
// const StoryList = async () => {
//   const following = await prisma.follower.findMany({
//     where: {
//       followerId: userId,
//     },
//   });

//   const followingIds = following.map((f) => f.followingId);
//   const ids = [user.id, ...followingIds];

//   const stories = await prisma.story.findMany({
//     where: {
//       userId: {
//         in: ids,
//       },
//     },
//   });
//   return (
//     {stories.length ? stories.map((story) => (
//     <div
//       className="flex flex-col items-center gap-2 cursor-pointer"
//       key={story.id}
//     >
//       <Image
//         src={story.user.avatar || "/noAvatar.png"}
//         alt=""
//         width={80}
//         height={80}
//         className="w-20 h-20 rounded-full ring ring-emerald-500"
//       />
//       <span className="font-medium">
//         {story.user.name || story.user.username}
//       </span>
//     </div>
//   )) : null}

// )
// };

// export default StoryList;

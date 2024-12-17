import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import StoryList from "./StoryList";

const Stories = async () => {
  const { userId: currentUserId }: { userId: string | null } = await auth();

  if (!currentUserId) return null;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="p-3 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
      <div className="flex gap-5 w-max">
        <StoryList stories={stories} userId={currentUserId} />
      </div>
    </div>
    // tes
  );
};

export default Stories;

import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const NavBar = async () => {
  const { userId }: { userId: string | null } = await auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      username: true,
    },
  });

  if (!user) return null;
  return (
    <div className="h-16 flex items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="text-xl font-bold text-emerald-600">
          FRAME
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex w-[50%] items-center justify-between">
        <div className="flex gap-6 text-gray-700">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="homepage"
              width={40}
              height={40}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="" className="flex items-center gap-2 cursor-default">
            <Image
              src="/friends.png"
              alt="friends"
              width={40}
              height={40}
              className="w-4 h-4 "
            />
            <span>Friends</span>
          </Link>
          <Link href="" className="flex items-center gap-2 cursor-default">
            <Image
              src="/stories.png"
              alt="stories"
              width={40}
              height={40}
              className="w-4 h-4 "
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-emerald-50 items-center rounded-xl ">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none hover:shadow-red-500"
          />
          <Image
            src="/search.png"
            alt=""
            width={40}
            height={40}
            className="w-5 h-5"
          />
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-default">
              <Image
                src="/people.png"
                alt="signed out"
                width={40}
                height={40}
                className="w-6 h-6"
              />
            </div>
            <div className="cursor-default">
              <Image
                src="/messages.png"
                alt="signed out"
                width={40}
                height={40}
                className="w-6 h-6"
              />
            </div>
            <div className="cursor-default">
              <Image
                src="/notifications.png"
                alt="signed out"
                width={40}
                height={40}
                className="w-6 h-6"
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className=" flex items-center gap-2">
              <Image
                src="/login.png"
                alt=""
                width={40}
                height={40}
                className="w-6 h-6"
              />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileNavBar username={user.username} />
      </div>
    </div>
  );
};
export default NavBar;

"use client";

import { deletePost } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

const PostInfo = ({ postId }: { postId: number }) => {
  const [open, setOpen] = useState(false);
  const deletePostWithId = deletePost.bind(null, postId);

  return (
    <div className="relative">
      <Image
        src="/more.png"
        width={40}
        height={40}
        alt="more"
        onClick={() => setOpen((prev) => !prev)}
        className="w-5 h-5 cursor-pointer"
      />
      {open && (
        <div className="absolute top-4 right-0 font-medium bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-sm shadow-lg z-30">
          <span className="cursor-default">View</span>
          <span className="cursor-default">Re-post</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;

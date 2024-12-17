"use client";

import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useOptimistic, useState } from "react";

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
}) => {

  const { isLoaded, userId } = useAuth();
  
  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (err) {}
  };
  return (
    <div className="flex items-center justify-between text-base font-medium">
      <div className="flex gap-8">
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <form action={likeAction}>
            <button>
              <Image
                src={optimisticLike.isLiked ? "/hearted.png" : "/heart.png"}
                width={20}
                height={20}
                alt="like"
                className="cursor-pointer mt-1"
              />
            </button>
          </form>
          <span className="text-gray-700">{optimisticLike.likeCount}</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <Image
            src="/comment.png"
            width={20}
            height={20}
            alt=""
            className=""
          />
          <span className="text-gray-700">{commentNumber}</span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <Image
            src="/share.png"
            width={20}
            height={20}
            alt=""
            className=""
          />
          {/* <span className="text-gray-700">30</span> */}
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;

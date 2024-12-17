"use client";

import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt=""
        width={100}
        height={100}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-emerald-50 rounded-lg p-2"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={40}
              height={40}
              className="w-5 h-5 self-end"
            />
            <AddPostButton />
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-700 flex-wrap">
          <CldUploadWidget
            uploadPreset="frame social media"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>
          {/* <div className="flex items-center gap-2 cursor-pointer font-medium">
            <Image
              src="/addVideo.png"
              alt=""
              width={40}
              height={40}
              className="w-6 h-6"
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-medium">
            <Image
              src="/poll.png"
              alt=""
              width={40}
              height={40}
              className="w-6 h-6"
            />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-medium">
            <Image
              src="/addevent.png"
              alt=""
              width={40}
              height={40}
              className="w-6 h-6 "
            />
            Event
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default AddPost;

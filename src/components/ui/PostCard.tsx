"use client";
import { TPost } from "@/src/types";
import Image from "next/image";
import { FaRegCommentAlt } from "react-icons/fa";
import UpVote from "../module/articles/UpVote";
import DownVote from "../module/articles/DownVote";
import Link from "next/link";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { formatDateTime } from "@/src/utils/date";
import { RiVerifiedBadgeFill } from "react-icons/ri";

type TPostCard = {
  data: TPost[];
  profile?: boolean;
};

const PostCard = ({ data, profile = false }: TPostCard) => {
  const user = useAppSelector(useCurrentUser) as TUser;
  console.log(user);
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        {data?.map((item: TPost) => {
          return (
            <div
              key={item._id}
              className=" bg-slate-100 dark:bg-primary-dark rounded-xl h-fit"
            >
              {!profile && (
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item?.author?.avatar}
                      alt="author"
                      height={80}
                      width={80}
                      className="size-[50px] object-cover rounded-full"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-lg font-semibold">
                        {item.author.name}
                      </p>
                      <p>{formatDateTime(item.createdAt)}</p>
                    </div>
                  </div>
                </div>
              )}
              <Link href={`/articles/${item._id}`} className="relative">
                <Image
                  src={item.images[0]}
                  alt="banner"
                  height={300}
                  width={400}
                  className="object-cover w-full h-[260px]"
                />
                {item.tags === "premium" && (
                  <p className="absolute top-1 right-2">
                    <RiVerifiedBadgeFill className="text-primary-400" />
                  </p>
                )}
              </Link>
              <div className="p-4">
                <Link
                  href={`/articles/${item._id}`}
                  className="text-lg font-semibold"
                >
                  {item.title}
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content.slice(0, 80) + "...",
                  }}
                />
                {/* <p>{item.content.slice(0, 80)}...</p> */}
              </div>
              <div className="flex items-center justify-between border-t h-[50px]">
                <div className="w-full flex justify-center">
                  <UpVote votes={item.upVotes} id={item._id} />
                </div>
                <div className="w-full flex justify-center">
                  <DownVote votes={item.downVotes} id={item._id} />
                </div>
                <p className="flex items-center gap-2 w-full p-2 justify-center">
                  <FaRegCommentAlt /> {item.commentsCount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostCard;

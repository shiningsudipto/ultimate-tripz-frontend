"use client";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetPopularPostsQuery } from "@/src/redux/features/post";
import { useAppSelector } from "@/src/redux/hooks";
import { TPopularPost } from "@/src/types";
import Link from "next/link";
import { FaAnglesUp } from "react-icons/fa6";
import { LiaUserEditSolid } from "react-icons/lia";
import Subscribe from "../../actions/Subscribe";

const Sidebar = () => {
  const { data, isLoading } = useGetPopularPostsQuery("");
  const user = useAppSelector(useCurrentUser) as TUser;
  console.log("user", user);
  return (
    <div className="sticky top-[84px] ">
      <div className="">
        <div className="space-y-2 border rounded-xl p-4">
          {user?.status === "basic" || !user ? (
            <div>
              <p className="text-2xl font-bold">Subscribe to Premium</p>
              <p className="font-medium mt-2 mb-3">
                Subscribe to unlock new features and if eligible, receive a
                share of ads revenue.
              </p>
              <Subscribe title="Subscribe" />
            </div>
          ) : (
            user?.status === "premium" && (
              <div>
                <p className="text-2xl font-bold text-green-500">
                  Welcome Premium Member!
                </p>
                <p className="font-medium">
                  Enjoy all the exclusive features and maximize your experience
                  with ad revenue sharing!
                </p>
              </div>
            )
          )}
        </div>
        <div className="border p-4 rounded-xl mt-4">
          <p className="text-xl font-bold mb-4">Popular Posts:</p>
          <div className="space-y-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data.data.map((item: TPopularPost) => {
                return (
                  <div key={item._id}>
                    <Link
                      href={`/articles/${item._id}`}
                      className="font-semibold"
                    >
                      {item.title}
                    </Link>
                    <p>{item.content.slice(0, 40)}...</p>
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-2">
                        <FaAnglesUp /> {item.upVotes.length}
                      </p>
                      <Link
                        href={`/profile/${item.author._id}`}
                        className="flex items-center gap-2"
                      >
                        <LiaUserEditSolid className="text-xl" />{" "}
                        {item.author.name}
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

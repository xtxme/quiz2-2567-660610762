"use client";
import { CommentProps } from "@/libs/types";
import { ReplyProps } from "@/libs/types";
export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}: CommentProps) {
  const showlike = () => {
    likeNum > 0 ? "/like.svg" : "";
  } 
  const showlikeNum = () => {
    likeNum > 0 ? `${likeNum} คน` : "";
  }
  return (
    
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
      {replies.map((rep, index) => (
            <Reply
              key={index}
              userImagePath={rep.userImagePath}
              username={rep.username}
              replyText={rep.replyText}
              likeNum={rep.likeNum}
            />
          ))}
    </div>
  );
}

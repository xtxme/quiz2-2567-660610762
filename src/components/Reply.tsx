"use client";

import { ReplyProps } from "@/libs/types";

export default function Reply({ 
  userImagePath, 
  username,
  replyText, 
  likeNum }:ReplyProps) {
  
  const showlike = () => {
    likeNum > 0 ? "/like.svg" : "";
  } 
  const showlikeNum = () => {
    likeNum > 0 ? `${likeNum} คน` : "";
  }
  return <div>your code for Reply component ...</div>;
}

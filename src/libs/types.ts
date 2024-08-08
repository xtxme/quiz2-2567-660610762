// You can define interfaces for all React components here.

import { Url } from "next/dist/shared/lib/router/router";

// Do not forget to export properly.

interface ReplyProps {
  userImagePath: string;
  username: string;
  replyText: string;
  likeNum: number;
  showlike: number;
}
export type { ReplyProps };

interface CommentProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: string[];
  }
  export type { CommentProps };

  interface PostOwnnerProps {
    MyName: string;
    Id: number;
    Texts: string;
    Likes: number;
  }
  export type { PostOwnnerProps };
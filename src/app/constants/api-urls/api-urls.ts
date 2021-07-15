export const TOP_STORIES = `https://hacker-news.firebaseio.com/v0/topstories.json`;
export const STORY_DETAILS = (id: string) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
export const COMMENT_DETAILS = (commentId: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`;

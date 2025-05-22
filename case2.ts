type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

const countComments = (
  comments: IComment[],
  countedIds: number[] = []
): number => {
  let count = 0;

  for (const comment of comments) {
    if (!comment.commentContent || countedIds.includes(comment.commentId))
      continue;

    countedIds.push(comment.commentId);
    count += 1;

    if (comment.replies) {
      count += countComments(comment.replies, countedIds);
    }
  }
  return count;
};

console.log("Total komentar:", countComments(comments));

export type Achievement = {
  title: string;
  detail: string;
  year: string;
};

// Ratings are "previously reported" figures and are editable.
// Do not imply they are current verified ratings.
export const achievements: Achievement[] = [
  {
    title: "Competitive Programming",
    detail:
      "Active participation across LeetCode, Codeforces, and CodeChef. Previously reported: LeetCode rating 1907, CodeChef rating 1492, Codeforces rating 1100+.",
    year: "Ongoing",
  },
  {
    title: "IIT Bombay Robotics Competition",
    detail:
      "Finalist, building a Line Follower Robot for the IIT Bombay Robotics Competition.",
    year: "—",
  },
  {
    title: "ATF Qualification",
    detail:
      "Qualified for Round 2 of ATF, previously reported in the top 4000.",
    year: "—",
  },
];
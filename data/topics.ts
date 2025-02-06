import { TopicType } from "../src/types/topic";

export const topics: TopicType[] = [
  {
    title: "Physics",
    enabled: true,
    subtopics: [
      {
        title: "Mechanics",
        enabled: true,
        subtopics: [
          {
            title: "Newton's laws",
            enabled: false,
            subtopics: [],
          },
          {
            title: "Work and energy",
            enabled: true,
            subtopics: [],
          },
        ],
      },
      {
        title: "Electromechanics",
        enabled: true,
        subtopics: [],
      },
    ],
  },
  {
    title: "Math",
    enabled: true,
    subtopics: [
      {
        title: "Geometrics",
        enabled: true,
        subtopics: [
          {
            title: "Sinus",
            enabled: false,
            subtopics: [],
          },
          {
            title: "Cosinus",
            enabled: true,
            subtopics: [],
          },
        ],
      },
      {
        title: "Alhebra",
        enabled: true,
        subtopics: [
          {
            title: "abstract systems",
            enabled: true,
            subtopics: [
              {
                title: "manipulation of expressions",
                enabled: true,
                subtopics: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Sport",
    enabled: false,
    subtopics: [],
  },
];

export default {
  data: [
    {
      title: "语文",
      key: 1,
      children: [
        { title: "学业水平表现", children: [], key: 2 },
        {
          title: "态度与习惯",
          key: 3,
          children: [
            {
              title: "日常表现",
              key: 4,
              children: [
                { title: "上课专心听讲", key: 5, children: [] },
                { title: "上课主动发言", key: 6, children: [] },
              ],
            },
            {
              title: "作业表现",
              key: 7,
              children: [
                {
                  title: "基础性作业",
                  key: 8,
                  children: [
                    { title: "按时完成作业", key: 9, children: [] },
                    { title: "作业书写端正", key: 10, children: [] },
                  ],
                },
              ],
            },
          ],
        },
        { title: "综合素养", children: [], key: 11 },
        { title: "体能测试", children: [], key: 12 },
      ],
    },
  ],
};

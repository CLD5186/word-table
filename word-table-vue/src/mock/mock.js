export default {
  data: [
    {
      label: "语文",
      id: 1,
      children: [
        { label: "学业水平表现", children: [], id: 2 },
        {
          label: "态度与习惯",
          id: 3,
          children: [
            {
              label: "日常表现",
              id: 4,
              children: [
                { label: "上课专心听讲", id: 5, children: [] },
                { label: "上课主动发言", id: 6, children: [] },
              ],
            },
            {
              label: "作业表现",
              id: 7,
              children: [
                {
                  label: "基础性作业",
                  id: 8,
                  children: [
                    { label: "按时完成作业", id: 9, children: [] },
                    { label: "作业书写端正", id: 10, children: [] },
                  ],
                },
              ],
            },
          ],
        },
        { label: "综合素养", children: [], id: 11 },
        { label: "体能测试", children: [], id: 12 },
      ],
    },
  ],
};

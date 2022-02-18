const idGenerator = (): (() => number) => {
  let id = 0;
  return () => id++;
};

export const onlineStudyIdGenerator: () => number = idGenerator();
export const studentIdGenerator: () => number = idGenerator();

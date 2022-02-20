export type TRoutesPath = {
  [key: string]: {
    name: string;
    url: string;
  };
};

export const ROUTES_PATH: TRoutesPath = {
  mainPage: { name: 'mainPage', url: '/' },
  onlineStudyPage: { name: 'onlineStudyPage', url: '/onlineStudies' },
  studentPage: { name: 'studentPage', url: '/students' },
};

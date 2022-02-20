import { MainPage, OnlineStudyPage, StudentPage } from './lazy';
import React from 'react';
import { ROUTES_PATH } from './path';

export type TRoute = {
  path: string;
  component: React.LazyExoticComponent<any>;
};

export const ROUTES: TRoute[] = [
  {
    path: ROUTES_PATH.mainPage.url,
    component: MainPage,
  },
  {
    path: ROUTES_PATH.onlineStudyPage.url,
    component: OnlineStudyPage,
  },
  {
    path: ROUTES_PATH.studentPage.url,
    component: StudentPage,
  },
];

import { commonContext } from '../../CommonContext';
import { OnlineStudyPageVMClassName } from '../pages/onlineStudyPage/OnlineStudyPageVM';
import { OnlineStudyPageVMImpl } from '../pages/onlineStudyPage/OnlineStudyPageVMImpl';
import { StudentPageVMClassName } from '../pages/studentPage/StudentPageVM';
import { StudentPageVMImpl } from '../pages/studentPage/StudentPageVMImpl';
import { MainPageVMClassName } from '../pages/mainPage/MainPageVM';
import { MainPageVMImpl } from '../pages/mainPage/MainPageVMImpl';

export const setViewModelModules = () => {
  const serviceLocator = commonContext().getServiceLocator();

  serviceLocator.registFactory(OnlineStudyPageVMClassName, () => new OnlineStudyPageVMImpl());
  serviceLocator.registFactory(StudentPageVMClassName, () => new StudentPageVMImpl());
  serviceLocator.registFactory(MainPageVMClassName, () => new MainPageVMImpl());
};

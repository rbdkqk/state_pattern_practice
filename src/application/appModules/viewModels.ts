import { commonContext } from '../../CommonContext';
import { OnlineStudyPageVMClassName } from '../pages/onlineStudyPage/OnlineStudyPageVM';
import { OnlineStudyPageVMImpl } from '../pages/onlineStudyPage/OnlineStudyPageVMImpl';
import { StudentPageVMClassName } from '../pages/studentPage/StudentPageVM';
import { StudentPageVMImpl } from '../pages/studentPage/StudentPageVMImpl';

export const setViewModelModules = () => {
  const serviceLocator = commonContext().getServiceLocator();

  serviceLocator.registFactory(OnlineStudyPageVMClassName, () => new OnlineStudyPageVMImpl());
  serviceLocator.registFactory(StudentPageVMClassName, () => new StudentPageVMImpl());
};

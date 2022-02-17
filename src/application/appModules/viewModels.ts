import { commonContext } from '../../CommonContext';
import { CoursePageVMClassName } from '../pages/coursePage/CoursePageVM';
import { CoursePageVMImpl } from '../pages/coursePage/CoursePageVMImpl';
import { StudentPageVMClassName } from '../pages/studentPage/StudentPageVM';
import { StudentPageVMImpl } from '../pages/studentPage/StudentPageVMImpl';

export const setViewModelModules = () => {
  const serviceLocator = commonContext().getServiceLocator();

  serviceLocator.registFactory(CoursePageVMClassName, () => new CoursePageVMImpl());
  serviceLocator.registFactory(StudentPageVMClassName, () => new StudentPageVMImpl());
};

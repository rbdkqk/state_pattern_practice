import { commonContext } from '../../CommonContext';
import { OnlineStudyServiceClassName } from '../../data/services/OnlineStudyService';
import { OnlineStudyServiceImpl } from '../../data/services/OnlineStudyServiceImpl';

export const setServiceModules = () => {
  const serviceLocator = commonContext().getServiceLocator();

  serviceLocator.registSingle(OnlineStudyServiceClassName, () => new OnlineStudyServiceImpl());
};

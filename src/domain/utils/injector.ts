import { commonContext } from '../../CommonContext';

export const Inject = <T>(className: any) =>
  commonContext().getServiceLocator().resolve<T>(className);

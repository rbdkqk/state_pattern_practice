import { ServiceLocator } from './domain/DI/ServiceLocator';

export class CommonContext {
  private _serviceLocator: ServiceLocator = new ServiceLocator();

  getServiceLocator = () => {
    return this._serviceLocator;
  };
}

const _commonContext = new CommonContext();

export const commonContext = () => {
  return _commonContext;
};

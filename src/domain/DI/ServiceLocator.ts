import { InstanceFactory, ServiceScope } from './InstanceFactory';

export class ServiceLocator {
  private _instances: { [key: string]: InstanceFactory<any> } = {};

  private regist = <T>(
    scope: ServiceScope,
    name: string,
    creator: (locator: ServiceLocator) => T
  ): void => {
    const factory = new InstanceFactory(scope, creator);
    this._instances[name] = factory;
  };

  resolve = <T>(name: string): T => {
    const instance = this._instances[name];
    if (!instance) {
      throw new Error(`regist ${name} first!!`);
    }

    const factory: InstanceFactory<T> = instance;

    // single
    if (factory.scope === ServiceScope.single && factory.instance) {
      return factory.instance;
    }

    // factory
    return factory.creator(this);
  };

  registSingle = <T>(name: string, creator: (locator: ServiceLocator) => T) => {
    this.regist(ServiceScope.single, name, creator);
  };

  registFactory = <T>(name: string, creator: (locator: ServiceLocator) => T) => {
    this.regist(ServiceScope.factory, name, creator);
  };
}

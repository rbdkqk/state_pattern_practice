import { ServiceLocator } from './ServiceLocator';

export enum ServiceScope {
  factory,
  single,
}

export class InstanceFactory<T> {
  scope: ServiceScope;
  creator: (locator: ServiceLocator) => T;
  instance: T | null;

  constructor(scope: ServiceScope, creator: (locator: ServiceLocator) => T) {
    this.scope = scope;
    this.creator = creator;
    this.instance = null;
  }
}

import { CommonContext, commonContext } from './CommonContext';

export class AppStarter {
  static initialize = (contextExecute: (c: CommonContext) => void) => {
    const context = commonContext();
    contextExecute(context);
  };
}

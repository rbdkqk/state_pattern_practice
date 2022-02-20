import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { MainPageVM, MainPageVMClassName } from './MainPageVM';
import { Inject } from '../../../domain/utils/injector';

interface IProps {}

interface IState {
  viewModel: MainPageVM;
}

class MainPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      viewModel: Inject<MainPageVM>(MainPageVMClassName),
    };
  }

  render() {
    const { viewModel } = this.state;

    return <div>MainPage</div>;
  }
}

export default observer(MainPage);

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { OnlineStudyPageVM, OnlineStudyPageVMClassName } from './OnlineStudyPageVM';
import { Inject } from '../../../domain/utils/injector';

interface IProps {}

interface IState {
  viewModel: OnlineStudyPageVM;
}

class OnlineStudyPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      viewModel: Inject<OnlineStudyPageVM>(OnlineStudyPageVMClassName),
    };
  }

  render() {
    return <div>OnlineStudyPage</div>;
  }
}

export default observer(OnlineStudyPage);

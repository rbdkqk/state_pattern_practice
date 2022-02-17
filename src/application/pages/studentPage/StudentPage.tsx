import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StudentPageVM, StudentPageVMClassName } from './StudentPageVM';
import { Inject } from '../../../domain/utils/injector';

interface IProps {}

interface IState {
  viewModel: StudentPageVM;
}

class StudentPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      viewModel: Inject<StudentPageVM>(StudentPageVMClassName),
    };
  }

  render() {
    return <div>StudentPage</div>;
  }
}

export default observer(StudentPage);

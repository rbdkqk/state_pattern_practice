import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { CoursePageVM, CoursePageVMClassName } from './CoursePageVM';
import { Inject } from '../../../domain/utils/injector';

interface IProps {}

interface IState {
  viewModel: CoursePageVM;
}

class CoursePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      viewModel: Inject<CoursePageVM>(CoursePageVMClassName),
    };
  }

  render() {
    return <div>CoursePage</div>;
  }
}

export default observer(CoursePage);

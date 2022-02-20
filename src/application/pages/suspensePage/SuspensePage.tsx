import React from 'react';
import { observer } from 'mobx-react';

interface ISuspensePageProps {}

const SuspensePage: React.FC<ISuspensePageProps> = ({}) => {
  return <div>Waiting...</div>;
};

export default observer(SuspensePage);

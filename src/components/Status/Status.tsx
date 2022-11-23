import React from 'react';
import { IStatusProps } from './Status.types';

export const Status: React.FC<IStatusProps> = (props: IStatusProps) => {
  const { status } = props;
  return (
    <div className="status-box">{`Done: ${status.done} | Undone: ${status.undone}`}</div>
  );
};

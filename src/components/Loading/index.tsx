import * as React from 'react';
import { LoadingSkeleton } from './style';

interface LoadingProps {
  height: string;
  width: string;
}

const Loading = ({ width, height }: LoadingProps) => (
  <LoadingSkeleton width={width} height={height} />
);

export default Loading;
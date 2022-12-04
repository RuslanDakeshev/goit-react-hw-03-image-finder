import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
   <div>
    <RotatingLines
      strokeColor="blue"
      strokeWidth="4"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
}
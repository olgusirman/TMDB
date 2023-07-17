import WideButton from '../../components/buttons/wideButton';
import { ButtonType } from '../../types/generals';
import { useAppSelector } from '../../redux/store';

const Home = () => {
  const name = useAppSelector((state) => state.auth.user.name);
  return (
    <div>
      <div>name:{name}</div>
      <WideButton
        title='test'
        type={ButtonType.ActiveFilled}
        color='bg-red-500'
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      ></WideButton>
    </div>
  );
};

export default Home;

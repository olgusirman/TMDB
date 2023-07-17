import { ButtonType } from '../../types/generals';

function WideButton({
  type,
  onClick,
  title,
  color,
}: {
  type: ButtonType;
  onClick: () => void;
  title: string;
  color?: string;
}) {
  function getButtonType() {
    switch (type) {
      case ButtonType.ActiveFilled:
        return `${color}   w-full py-4 border-icon-primary border-solid rounded-[16px] text-medium text-white`;
      case ButtonType.ActiveUnfilled:
        return 'w-full border-[2px] py-4 border-icon-primary border-solid rounded-[16px] text-medium text-white';
      case ButtonType.InactiveFilled:
        return `bg-disabled-button   w-full py-4 border-icon-primary border-solid rounded-[16px] text-medium text-white`;
      case ButtonType.InactiveUnfilled:
        return `bg-disabled-button   w-full py-4 border-icon-primary border-solid rounded-[16px] text-medium text-white`;
      default:
        break;
    }
  }

  const buttonType = getButtonType();
  return (
    <div className='px-6'>
      <button
        onClick={onClick}
        className={buttonType}
        disabled={type === ButtonType.InactiveFilled || type === ButtonType.InactiveUnfilled}
      >
        {title}
      </button>
    </div>
  );
}

export default WideButton;

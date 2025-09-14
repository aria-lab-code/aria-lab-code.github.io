import { FontAwesomeIcon, iconMap } from '@/icons'

const ButtonR = ({title, link }) => {
  
  return (
    <button 
      onClick={() => window.open(link, '_blank')} 
      className={`bg-ured rounded-md py-1 px-2 text-white text-sm flex justify-center items-center gap-xs hover:bg-white hover:text-ured border-ured border transition-colors cursor-pointer`}
    >
      <FontAwesomeIcon icon={iconMap[title]} />
      {title}
    </button>
  );
};

export default ButtonR;

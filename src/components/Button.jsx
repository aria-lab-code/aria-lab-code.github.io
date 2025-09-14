import { FontAwesomeIcon, iconMap } from '@/icons'

const Button = ({title, link }) => {
  
  return (
    <button 
      onClick={() => window.open(link, '_blank')} 
      className={`text-ured text-xl hover:scale-110 transition-all cursor-pointer`}
    >
      <FontAwesomeIcon icon={iconMap[title]} />
    </button>
  );
};

export default Button;

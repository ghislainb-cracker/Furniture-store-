
export default function Star({ on, handleClick }) {
  return (
    <i 
      className={`fa${on ? 's' : 'r'} fa-star text-light`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    ></i>
    
  );
}

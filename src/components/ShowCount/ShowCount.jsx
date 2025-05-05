import './ShowCount.css';

const ShowCount = ({ label, count }) => {
  return (
    <div className='count-container'>
      <div className='count-text'>
        <h2>{label}</h2>
      </div>
      <div className='count-number'>
        {count} {count === 1 || count === -1 ? 'click' : 'clicks'}
      </div>
    </div>
  );
};

export default ShowCount;

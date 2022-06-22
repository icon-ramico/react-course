import { useState } from 'react';
const OurText = props => {
  const myName = props.name;
  const [name, setName] = useState(myName);

  const handleClick = () => {
    setName('ahmad');
  };
  return (
    <div>
      <p
        style={{
          backgroundColor: 'red',
        }}>
        {23423}
      </p>
      <p>{name}</p>
      <p>{[1, 2, 3, 4, 5, 6, 7, 8, 9]}</p>
      <p>{{ name: 'ali' }.name}</p>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default OurText;

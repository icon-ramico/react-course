const OurText = () => {
  return (
    <div>
      <p
        style={{
          backgroundColor: 'red',
        }}>
        {23423}
      </p>
      <p>{'anything'}</p>
      <p>{[1, 2, 3, 4, 5, 6, 7, 8, 9]}</p>
      <p>{{ name: 'ali' }.name}</p>
    </div>
  );
};

export default OurText;

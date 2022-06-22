const OurList = ({ ...props }) => {
  const { gender, accounts } = props;
  return (
    <div className='list'>
      <h2>{gender}s</h2>
      {/* array.map((el, i) =>) */}
      {accounts.map(account => (
        <div key={account.id}>
          <p>
            {account.first_name} {account.last_name}
            <br />
            {account.iban}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurList;

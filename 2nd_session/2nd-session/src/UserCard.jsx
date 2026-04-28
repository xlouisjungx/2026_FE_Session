function UserCard({ name, job, color }) {
  const cardStyles = {
    backgroundColor: color,
    padding: '15px',
    borderRadius: '10px',
    margin: '10px',
    color: 'white',
  };
  return (
    <div style={cardStyles}>
      <h2>이름: {name}</h2>
      <p>{job}</p>
    </div>
  );
}

export default UserCard;

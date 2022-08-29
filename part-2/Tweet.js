function Tweet({ username, name, date, message }) {
  return (<div className="Tweet">
    <p>  {name}  </p>
    <p> {username} </p>
    <p> {message} </p>
    <p> {date} </p>
  </div>);
}
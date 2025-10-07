const History = (getHistory) => {

  return <div><h2 onClick={history}>History</h2>
  
  <ul>
        {getHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  </div>
}

export default History;
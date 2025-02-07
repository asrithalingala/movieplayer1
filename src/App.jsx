import { useEffect, useState } from 'react';
import './index.css';

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {
    console.log(`${title} has been liked ${hasLiked}`);
  }, [hasLiked])

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h1 >{title} {count}</h1>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>

    </div>
  )

}

function App() {
  return (<div>
    <h1>this is app component</h1>
    <Card title="Star Wars" />
    <Card title="  The Lion King"/>
    <Card title="  Avatar" />
  </div>)
}
export default App

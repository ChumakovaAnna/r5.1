import './App.css';
import Card from './component/Card';
import './App.css';
import './bootstrap.min.css';
import {nanoid} from 'nanoid';
import img from './img/item.jpg';

let data = [
  {
    id: nanoid(),
    img: img,
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: nanoid(),
    img: "",
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content",
    link: "#"
  },
  
];

function App() {
  return (
    <div className='App'>
      {data.map(item => 
      <Card key={item.id} {...item}>
        {item.img ? <img src={item.img} className="card-img-top" alt="..."></img> : null}
      </Card>)}
    </div>
  );
}

export default App;

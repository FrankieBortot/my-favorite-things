import './App.css';
import { articleList } from './articles.js';

function App() {
  let link = articleList[0];
  return (
    <div>
      <Hero />
      <Card article={link} />
    </div>
  )
}

function Hero() {
  return (
    <div>
      <h1>
      My favorite things
      </h1>   
    </div>
  )
}

function Card({ article }) {

  const listTags = article.tags.map(
    tag => 
    <Tag key={tag} text={tag}/>
  );

  return (
  <div className='card-article'>
    <div className='card-image' >
    <img src={article.image} alt="Girl in a jacket" />
    </div>
    <div className='body'>
      <div className='title'>
        {article.title}
      </div>
      <div className='description'>
        {article.description}
      </div>

      <div className='tag-list'>
        {listTags}
      </div>

      

    </div>
  </div>
  )
}

function Tag({text}) {

  return (
    <div className='tag'>
      {text}
    </div>
  )
}

export default App;

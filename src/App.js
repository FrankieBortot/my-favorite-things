import React from "react";
import "./App.css";
import { articleList } from "./articles.js";

function App() {
  // let link = articleList[0];

  return (
    <div>
      <Hero />
      <CardList />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <h1>My favorite things</h1>
      <h2>Where I gathered a lot of useful things</h2>
    </div>
  );
}

function CardList() {
  const listCards = articleList.map((article) => (
    <Card key={article.title} article={article} />
  ));

  return <>{listCards}</>;
}

function Card({ article }) {
  const listTags = article.tags.map((tag) => <Tag key={tag} text={tag} />);

  return (
    <div className="card-article">
      <div className="image-container">
        <img className="image" src={article.image} alt="Girl in a jacket" />
      </div>

      <div className="body">
        <div className="title">{article.title}</div>
        <div className="description">{article.description}</div>
        <div className="tag-list">{listTags}</div>
      </div>
    </div>
  );
}

function Tag({ text }) {
  return <div className="tag">{text}</div>;
}

export default App;

import { useFetch } from './Hooks/useFetch';
import './App.css';
import { Card } from './Components/Card';
import { Button } from './Components/Button';
import { Header } from './Components/Header';
import { useState } from 'react';
import { doPostArray } from './utiles/doPostArray';


function App() {
  const{ data } = useFetch("http://localhost:4000/api")

  const [selectedCards, setSelectedCards] = useState([]);

  /**
   * Manejador de seleccion de cartas
   * @param {card} cardInfo -> informacion de cada elemento card
   * @param {bool} isSelected -> estado de seleccion de cada elemento carta
   */
  const handleCardSelection = (cardInfo, isSelected) => {
    if (isSelected) {
      setSelectedCards([...selectedCards, cardInfo]);
    } else {
      setSelectedCards(selectedCards.filter(card => card.name !== cardInfo.name));
    }
  };

  const postCards = ()=>{
    console.log(selectedCards);
    doPostArray('http://localhost:4000/cards', selectedCards);
  };

  return (
    <div className="App">
      <Header/>
      <main>
      {data && data.results.map(
        character => (
          <Card
          id={character.id}
          key={character.id}
          name={character.name}
          imag={character.image}
          location={character.location.name}
          status={character.status}
          onSelect={handleCardSelection}
          />
        )
      )}
      </main>
      {selectedCards.length > 0 && <Button onClick={postCards}/>}
      
    </div>
  );
}

export default App;

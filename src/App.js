import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState } from 'react';


function App() {
  const [Movielist, setMovielist] = useState([
    { title: "Tesla", description: "A freewheeling take on visionary inventor Nikola Tesla, his interactions with Thomas Edison and J.P. Morgan's daughter Anne, and his breakthroughs in transmitting electrical power and light.", posterURL: "https://m.media-amazon.com/images/M/MV5BYzg0MjQ0ODUtYTgyNC00Y2Y5LWE5NDctODY3ZTFkYmZkNGFiXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg", rate: 2.5 },
    { title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg", rate: 4 },
    { title: "Men in Black: International", description: "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.", posterURL: "https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg", rate: 2.5 },
    { title: "I Am Mother", description: "A teenage girl is raised underground by a kindly robot 'Mother' -- designed to repopulate the earth following the extinction of humankind. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTkxMTczNTA4Nl5BMl5BanBnXkFtZTgwNDAyMzgwODM@._V1_SX300.jpg", rate: 3 },
    { title: "Captive State", description: "Set in a Chicago neighborhood nearly a decade after an occupation by an extra-terrestrial force, Captive State explores the lives on both sides of the conflict - the collaborators and dissidents.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTgyNjU0NTAxOV5BMl5BanBnXkFtZTgwNTc4MDIzNjM@._V1_SX300.jpg", rate: 3.5 },
    { title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", posterURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg", rate: 4 }
  ])

  const [Title, setTitle] = useState("")
  const chooseByTitle = (word) => {
    setTitle(word)
  }

  const [Rate, setRate] = useState("0")
  const chooseByRate = (rating) => {
    setRate("" + rating)
  }

  const addMovie=(title,description,posterURL,rate) => {
    setMovielist([...Movielist,{title,description,posterURL,rate}])
  }

  return (
    <div className="App">
      <Header add={addMovie} searchTitle={chooseByTitle} searchRate={chooseByRate} />
      <Main add={addMovie} Movies={Movielist} Title={Title} Rate={Rate} />
    </div>
  );
}

export default App;






import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Header from './componentes/header/Header';


function App() {
  return (
    <div >
      
      <Header/>
      
      
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;

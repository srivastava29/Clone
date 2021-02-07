import './App.css';
import Post from "./Components/Post";
import Postform from "./Components/Postform"
import {Provider} from 'react-redux';
import store from "./Components/store";
                                                                                                                                    
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Postform/>
      <Post/>
      
    </div>
    </Provider>
  );
}

export default App;

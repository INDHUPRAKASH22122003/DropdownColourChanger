import './App.css';
import Drop from './Drop';
import './Drop.css'
function App() {
    var options = [
        
      { 'label': 'yellow', 'value': 'yellow' },
      { 'label': 'Pink', 'value': 'Pink' },
      { 'label': 'Red', 'value': 'Red' },
      { 'label': 'Teal', 'value': 'teal' },
        { 'label': 'Lime', 'value': 'lime' },
        { 'label': 'Green', 'value': 'Green' },
        { 'label': 'Crimson', 'value': 'crimson' },
        { 'label': 'Darkblue', 'value': 'darkblue' },
        { 'label': 'Lavender', 'value': 'lavender' },
        { 'label': 'Rebecca Purple', 'value': 'rebeccapurple' },
        { 'label': 'Ghost White', 'value': 'ghostwhite' },
        { 'label': 'Aqua Marine', 'value': 'aquamarine' },
        { 'label': 'Alice Blue', 'value': 'aliceblue' }
    ];
    return (
        <div className="App">
          <div className='drops'>
            <h1 className='app-title'>Select from DropDown Colors</h1>
            <Drop options={options} />
            </div>
            </div>
      
    );
}

export default App;
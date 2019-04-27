import React from 'react';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            react<b>calendar</b>
          </span>
        </div>
      </header>
      <main>
        <Calendar />
      </main>
    </div>

    )
  }
}

export default App;
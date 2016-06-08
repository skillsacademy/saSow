import React from 'react';
import {render} from 'react-dom';
import SowCalendar from './components/sowCalendar.jsx';

require('../../sass/main.scss');

// essential for hot module replacement!
if (module.hot){
  module.hot.accept();
}

class App extends React.Component {
  render () {
    return (

      <div class="wrapAll">
        <header>

        </header>
        <main>
          <SowCalendar pagename={this.props.pagename} />   
        </main>
        <footer>      

        </footer>
      </div>

    );
  }
}


render(<App pagename="first component" />, document.getElementById('app'));

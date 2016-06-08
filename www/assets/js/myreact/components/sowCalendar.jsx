import React from 'react';

require('../../../sass/sowCalendar/_sowCalendar.scss');

export default class SowCalendar extends React.Component {
  render () {
    return <div className="sowCalendar">
    	<table>
    		<caption className="sr-only">Table of weeks for Scheme of Work</caption>
   		       <tbody>
    			<tr className="topicUnitDesc">
    				<td className="wk1first unitB">
    					<span className="topicUnit">R..</span>
    				</td>
    				<td className="wk1second ">
    					&nbsp;
    				</td>  
    				<td className="wk2first">
                        &nbsp;
    				</td>
    				<td className="wk2second unitY">
                        <span className="topicUnit">R..</span>
    				</td>

    				<td className="wk3first unitG" colSpan="4">
						<span className="topicUnit">Ratio - Estimation with rounding</span>
    				</td>
    			</tr>
    	
    			<tr className="weekNumber">
    				<th className="wk1first unitB">
    					<span className="wk">Wk 1</span> <span className="sr-only"> 1st half</span>
    					<span className="date">1 Sep</span>
    				</th>
    				<th className="wk1second">
    					<span className="wk">Wk 1</span> <span className="sr-only"> 2nd half</span>
    					<span className="date">3 Sep</span>
    				</th>

    				<th className="wk2first">
    					<span className="wk">Wk 2</span> <span className="sr-only"> 1st half</span>
    					<span className="date">10 Sep</span>
    				</th>
    				<th className="wk2second unitY">
    					<span className="wk">Wk 2</span> <span className="sr-only"> 2nd half</span>
    					<span className="date">13 Sep</span>
    				</th>

    				<th className="wk3first unitG">
    					<span className="wk">Wk 3</span> <span className="sr-only"> 1st half</span>
    					<span className="date">17 Sep</span>
    				</th>
    				<th className="wk3second unitG">
    					<span className="wk">Wk 3</span> <span className="sr-only"> 2nd half</span>
    					<span className="date">20 Sep</span>
    				</th>

    				<th className="wk4first unitG">
    					<span className="wk">Wk 4</span> <span className="sr-only"> 1st half</span>
    					<span className="date">24 Sep</span>
    				</th>
    				<th className="wk4second unitG">
    					<span className="wk">Wk 4</span> <span className="sr-only"> 2nd half</span>
    					<span className="date">27 Sep</span>
    				</th>
    			</tr>
	           </tbody>
    	</table>

    </div>;
  }
}



/** WEBPACK FOOTER **
 ** ./www/assets/js/myreact/components/sowCalendar.jsx
 **/


/** WEBPACK FOOTER **
 ** ./www/assets/js/myreact/components/sowCalendar.jsx
 **/
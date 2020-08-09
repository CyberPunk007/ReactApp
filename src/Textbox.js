import React from 'react';

const Textbox = ({handleclick,number,}) => {
	return(
		<div>
			 
		<form className="pa4 black-80">
  			<div classNameName=" ml-50">

				<input className= ' tc pa3 ba b--green bg-lightest-red w-30 center mb3 ' 	type = 'search'	placeholder='Enter Value' onChange = {handleclick} /><br/>
				<a className="f6 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-red w4" href="http://terriblytinytales.com/test.txt"  >Submit</a>
				
			 </div>
</form>

		</div>
		)
}
export default Textbox;
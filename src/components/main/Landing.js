//import React library
import React from "react"

//render JSX into a DOM
/* FUNCTIONAL COMPONENT
function Landing() {
  return (
    <div className='landing-section'>
      <div className='bg-placeholder'></div>
    </div>
  )
} */

//CLASS BASED COMPONENT
class Landing extends React.Component {
  render() {
    return (
      <div className='landing-section'>
        <div className='bg-placeholder'></div>
      </div>
    )
  }
}

//export MainLanding component
export default Landing

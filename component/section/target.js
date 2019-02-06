import { useState, useEffect } from 'react'
import withLayout from 'component/hoc/with-layout'

const Target = ({findByID, findByName, pokemon}) =>
  <div>
    <div>
      <label>ID:</label>
      <input onChange={ findByID }/>
    </div>
    <div>
      <label>Name:</label>
      <input onChange={ findByName }/>
    </div>
    <pre>
      {
        JSON.stringify(pokemon)
      }
    </pre>
  </div>

export default withLayout(Target)

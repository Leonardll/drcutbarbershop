import { useState, useEffect} from 'react'
import { storage } from '../../base'

import React from 'react'

const useStorage = (file) => {
    const [progress, setprogress] = useState(0);
    const [error, setError] = useState(null); 
  return (
    <div>useStorage</div>
  )
}
 export default useStorage;
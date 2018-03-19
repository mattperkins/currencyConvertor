import React from 'react'
import ESS from 'react-native-extended-stylesheet'

import Home from './screens/Home'

ESS.build({
 $primaryBlue: '#4F6D7A'
})

export default () => <Home />

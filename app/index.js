import React from 'react'
import ESS from 'react-native-extended-stylesheet'

import Home from './screens/Home'

ESS.build({
 $primaryBlue: '#a7e7fb',
 $white: '#f7f7f7',
})

export default () => <Home />

import { Dimensions } from 'react-native'
import ESS from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2

export default ESS.create({
 container: {
  alignItems: 'center'
 },
 containerImage: {
  alignItems: 'center',
  justifyContent: 'center',
  width: imageWidth,
  height: imageWidth 
 },
 logo: {
  width: imageWidth -80,
  marginTop: 50,
},
 title: {
  marginTop: 30,
  color: '$white',
  fontWeight: '600',
  fontSize: 28,
  letterSpacing: -0.5,
}
})

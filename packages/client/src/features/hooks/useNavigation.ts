import { useContext } from 'react'
import NavigationContext from '../../contexts/NavigationContext'

export const useNavigation = () => {
  const navigation = useContext(NavigationContext)
  return navigation
}

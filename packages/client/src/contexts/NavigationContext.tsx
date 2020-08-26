import React, { createContext } from 'react'

/**
 * Interface
 */

interface NavigationValue {
  isDrawerDisplayCondition: boolean
  handleDrawerDisplayConditio: (condition: boolean) => void
}

/**
 * Context API
 */

const NavigationContext = createContext<NavigationValue>({
  isDrawerDisplayCondition: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleDrawerDisplayConditio: () => {},
})

const useNavigation = (): NavigationValue => {
  /**
   * Navigation state
   */
  const [isDrawerDisplayCondition, setDrawerDisplayConditio] = React.useState(
    false
  )

  const handleDrawerDisplayConditio = React.useCallback(
    (condition) => {
      setDrawerDisplayConditio(condition)
    },
    [setDrawerDisplayConditio]
  )

  return {
    isDrawerDisplayCondition,
    handleDrawerDisplayConditio,
  }
}

/**
 * NavigationProvider API
 */

export const NavigationProvider: React.FC = (props) => {
  const { children } = props
  const value = useNavigation()

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export const NavigationConsumer = NavigationContext.Consumer

export default NavigationContext

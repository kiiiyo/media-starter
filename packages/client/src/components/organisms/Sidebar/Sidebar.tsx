import React, { FC } from 'react'
import { Hidden } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//
import { useNavigation } from '@/features/hooks'
import { Atoms } from '@/components'

/**
 * Interface
 */

//export interface SidebarProps {}

/**
 * Style
 */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    inner: {
      top: 64,
      width: 256,
      height: `calc(100% - 64px)`,
      [theme.breakpoints.down(1280)]: {
        top: 0,
        height: '100%',
      },
    },
  })
)

const Sidebar: FC = (props) => {
  const classes = useStyles()
  const {
    isDrawerDisplayCondition,
    handleDrawerDisplayConditio,
  } = useNavigation()

  return (
    <Hidden mdDown={!isDrawerDisplayCondition}>
      <Atoms.Drawer
        open={true}
        onClose={() => {
          handleDrawerDisplayConditio(false)
        }}
        variant={isDrawerDisplayCondition ? 'temporary' : 'permanent'}
        classes={{
          paper: classes.inner,
        }}
      >
        Sidebar
      </Atoms.Drawer>
    </Hidden>
  )
}

export default Sidebar

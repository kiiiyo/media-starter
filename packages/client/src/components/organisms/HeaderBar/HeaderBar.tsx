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
    customizeToolbar: {
      minHeight: 64,
    },
  })
)

const HeaderBar: FC = (props) => {
  const classes = useStyles()
  const { handleDrawerDisplayConditio } = useNavigation()

  return (
    <Atoms.AppBar>
      <Atoms.Toolbar className={classes.customizeToolbar}>
        <Hidden lgUp={true}>
          <Atoms.IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              handleDrawerDisplayConditio(true)
            }}
          >
            <Atoms.MenuIcon />
          </Atoms.IconButton>
        </Hidden>
        <Atoms.Typography component="h1" variant="h6" color="inherit" noWrap>
          Media Starter
        </Atoms.Typography>
      </Atoms.Toolbar>
    </Atoms.AppBar>
  )
}

export default HeaderBar

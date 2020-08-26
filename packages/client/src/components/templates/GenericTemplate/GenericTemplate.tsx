import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//
import { Atoms } from '@/components'

/**
 * Interface
 */

export interface GenericTemplateProps {
  headerBar: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

/**
 * Style
 */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBar: {
      position: 'fixed',
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      display: 'flex',
      overflow: 'hidden',
      paddingTop: theme.spacing(8),
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 256,
      },
    },
  })
)

/**
 * Presentational Component
 */

const GenericTemplate: FC<GenericTemplateProps> = (props) => {
  const { children, headerBar, sidebar } = props
  const classes = useStyles()
  return (
    <>
      {headerBar && <div className={classes.headerBar}>{headerBar}</div>}
      {sidebar && sidebar}
      {children && (
        <main className={classes.content}>
          <Atoms.Container maxWidth="md">{children}</Atoms.Container>
        </main>
      )}
    </>
  )
}

export default GenericTemplate

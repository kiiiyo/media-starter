import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//

/**
 * Interface
 */

export interface GenericTemplateProps {
  appBar: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

/**
 * Style
 */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    header: {
      zIndex: theme.zIndex.drawer + 1,
    },
    sidebar: {},
    main: {},
  })
)

const GenericTemplate: FC<GenericTemplateProps> = (props) => {
  const { children, appBar, sidebar } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {appBar && <header className={classes.header}>{appBar}</header>}
      {sidebar && <div className={classes.sidebar}>{sidebar}</div>}
      {children && <main className={classes.main}>{children}</main>}
    </div>
  )
}

export default GenericTemplate

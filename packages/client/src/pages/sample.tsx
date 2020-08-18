import { NextPage } from 'next'
//
import { Templates, Atoms } from '@/components'

const SamplePage: NextPage = (props) => {
  return (
    <Templates.GenericTemplate
      appBar={
        <Atoms.AppBar>
          <Atoms.Toolbar>
            <Atoms.Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              Media Starter
            </Atoms.Typography>
          </Atoms.Toolbar>
        </Atoms.AppBar>
      }
      sidebar={<div>sidebar</div>}
    >
      <h1>Sample</h1>
    </Templates.GenericTemplate>
  )
}

export default SamplePage

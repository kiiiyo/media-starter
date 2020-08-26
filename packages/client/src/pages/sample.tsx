import { NextPage } from 'next'
//
import { Templates, Organisms } from '@/components'

const SamplePage: NextPage = (props) => {
  return (
    <Templates.GenericTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar />}
    >
      <h1>Sample</h1>
    </Templates.GenericTemplate>
  )
}

export default SamplePage

import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
//
import { Domain } from '@/features'
import { getApi } from '@/utils/api'

//
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getApi('categories')
  return { props: { collection: data } }
}
//
// ______________________________________________________
//
const HomePage: NextPage<{
  collection: Array<Domain.Category.Interface>
}> = (props) => {
  const { collection } = props
  return (
    <>
      <h1>Welcome to Media Starter Kit</h1>
      <ul>
        {collection &&
          collection.length > 0 &&
          collection.map((category: Domain.Category.Interface, index) => {
            const { title, description, slug } = category
            const pageDirPath = `/categories/[slug]`
            const pageRoutingPath = `/categories/${slug}`

            return (
              <li key={index}>
                <Link href={pageDirPath} as={pageRoutingPath}>
                  <a>
                    <span>{title}</span>
                    <span>{description}</span>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
//
// ______________________________________________________
//
export default HomePage

import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
//
import { getApi } from '@/utils/api'
//
// ______________________________________________________
//

type Category = {
  articles: any[]
  created_at: string
  description: string
  id: number
  slug: string
  title: string
  updated_at: string
}

//
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context)
  const categories = await getApi('categories')
  return { props: { categories } }
}
//
// ______________________________________________________
//
const HomePage: NextPage<{
  categories: Array<Category>
}> = (props) => {
  const { categories } = props
  return (
    <>
      <h1>Welcome to Media Starter Kit</h1>
      <ul>
        {categories &&
          categories.length > 0 &&
          categories.map((category: Category, index) => {
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

import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
//
import { getApi } from '@/utils/api'
//
// ______________________________________________________
//

type Article = {
  id: number
  created_at: string
  updated_at: string
  title: string
  slug: string
  description: string
  date: string
  content: string
  category: number
  user: number
  author: any
  coverImage: any
}

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
  const {
    params: { slug },
  } = context
  const category = await getApi(`categories/?slug=${slug}`)

  return { props: { category: category[0] } }
}
//
// ______________________________________________________
//
const CategoriesPage: NextPage<{
  category: Category
}> = (props) => {
  const {
    category: { title, articles },
  } = props
  return (
    <>
      <h1>Category: {title}</h1>
      <ul>
        {articles &&
          articles.length > 0 &&
          articles.map((article: Article, index) => {
            const { title, slug } = article
            const pageDirPath = `/articles/[slug]`
            const pageRoutingPath = `/articles/${slug}`

            return (
              <li key={index}>
                <Link href={pageDirPath} as={pageRoutingPath}>
                  <a>
                    <span>{title}</span>
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
export default CategoriesPage

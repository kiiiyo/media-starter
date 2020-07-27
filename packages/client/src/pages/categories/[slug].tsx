import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
//
import { Domain } from '@/features'
import { getApi } from '@/utils/api'
//
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: { slug },
  } = context
  const data = await getApi(`categories/?slug=${slug}`)

  return { props: { category: data[0] } }
}
//
// ______________________________________________________
//
const CategoriesPage: NextPage<{
  category: Domain.Category.Interface
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
          articles.map((article: Domain.Article.Interface, index) => {
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

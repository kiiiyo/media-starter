import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
//
import { Domain } from '@/features'
import { getApi } from '@/utils/api'

//
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let defaultPage = 1
  const defaultLimit = 3

  if (query.page && Number(query.page) > 0) {
    defaultPage = parseInt(query.page + '')
  }

  const currentPage = +defaultPage === 1 ? 0 : (+defaultPage - 1) * defaultLimit

  const totalPages = await getApi('articles/count')
  const data = await getApi(
    `articles?_limit=${defaultLimit}&_start=${currentPage}`
  )
  const lastPage = Math.ceil(totalPages / defaultLimit)

  return {
    props: {
      collection: data,
      page: +defaultPage,
      totalPages,
      lastPage,
    },
  }
}
//
// ______________________________________________________
//
const HomePage: NextPage<{
  collection: Array<Domain.Article.Interface>
  page: number
  totalPages: number
  lastPage: number
}> = (props) => {
  const { collection, page, lastPage } = props
  const router = useRouter()
  return (
    <>
      <h1>Welcome to Media Starter Kit</h1>
      <ul>
        {collection &&
          collection.length > 0 &&
          collection.map((article: Domain.Article.Interface, index) => {
            const { title, description } = article

            return (
              <li key={index}>
                <span>{title}</span>
                <span>{description}</span>
              </li>
            )
          })}
      </ul>
      <button
        onClick={() => router.push(`/articles?page=${page - 1}`)}
        disabled={page <= 1}
      >
        前へ
      </button>
      <button
        onClick={() => router.push(`/articles?page=${page + 1}`)}
        disabled={page >= lastPage}
      >
        次へ
      </button>
    </>
  )
}
//
// ______________________________________________________
//
export default HomePage

import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { fileName, date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article className="xl:px-40">
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10 mb-4">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
            <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              {` • `}
              <Link href={editUrl(fileName)}>{'Edit this page'}</Link>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

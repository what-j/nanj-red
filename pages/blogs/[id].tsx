import { NextPage } from 'next';
import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigation';
import { getBlogBy, getBlogs, axiosInstance } from '../../service/blogs';


interface BlogItemType {
  id: String,
  createdAt: String,
  updatedAt: String,
  title: String,
  date: String,
  content: String
}

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <Head title="Blogs page" description="" url="" ogImage="" />
      <Navigation />
      <section>
        <h2>{ title }</h2>
        <p>{ date }</p>
        <div>{ content }</div>
      </section>
    </>
  )
}

export const getStaticPaths = async () => {
  const { data } = await getBlogs();
  const paths = data.contents.map(item => `/blogs/${item.id}`);
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const { res } = await axiosInstance.get(
      `https://node-red.microcms.io/api/v1/blogs/${id}`,
      );
  const { data } = await res.data.content
//   const { data } = await getBlogBy(id);
  return { props: { ...data }}
}

export default BlogsItemPage;

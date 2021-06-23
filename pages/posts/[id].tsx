import { NextPage } from 'next';
import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigation';
import { getPostBy, getPosts, axiosInstance } from '../../service/posts';


interface PostItemType {
  id: String,
  createdAt: String,
  updatedAt: String,
  title: String,
  date: String,
  content: String
}

const PostsItemPage: NextPage<PostItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <Head title="Posts page" description="" url="" ogImage="" />
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
  const { data } = await getPosts();
  const paths = data.contents.map(item => `/posts/${item.id}`);
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const { res } = await axiosInstance.get(
      `https://node-red.microcms.io/api/v1/posts/${id}`,
      );
  const { data } = await res.data.content
//   const { data } = await getPostBy(id);
  return { props: { ...data }}
}

export default PostsItemPage;

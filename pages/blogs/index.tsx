import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigation';
import { getBlogs } from '../../service/blogs';


const BlogItemStyle = {
  padding: 10
}

// const BlogItem: React.FC<BlogItemType> = props => {
const BlogItem = props => {
  const { id, title , date } = props.items;

  return (
    <div style={ BlogItemStyle }>
      <Link href="/blogs/[id]" as={`/blogs/${id}`}>
        <div>
          <span>{ date }</span>
          <span>{ title }</span>
        </div>
      </Link>
    </div>
  )
}

const Blogs: NextPage = (props: any) => {
  const { contents } = props;

  return (
    <div className="blog-container">
      <Head title="Blogs page" description="" url="" ogImage="" />
      <Navigation />
      {
        contents.map( item => <BlogItem items={ item } key={ item.id } />)
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await getBlogs();
  return { props: { contents: data.contents } };
}

export default Blogs;

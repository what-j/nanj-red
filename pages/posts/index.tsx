import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigation';
import { getPosts } from '../../service/posts';


const PostItemStyle = {
  padding: 10
}

// const PostItem: React.FC<PostItemType> = props => {
const PostItem = props => {
  const { id, title , date } = props.items;

  return (
    <div style={ PostItemStyle }>
      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <div>
          <span>{ date }</span>
          <span>{ title }</span>
        </div>
      </Link>
    </div>
  )
}

const Posts: NextPage = (props: any) => {
  const { contents } = props;

  return (
    <div className="blog-container">
      <Head title="Posts page" description="" url="" ogImage="" />
      <Navigation />
      {
        contents.map( item => <PostItem items={ item } key={ item.id } />)
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await getPosts();
  return { props: { contents: data.contents } };
}

export default Posts;

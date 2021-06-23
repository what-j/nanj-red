import { useRouter } from "next/router";
import * as React from 'react';
import { useState } from 'react';
import Head from '../components/templates/head';
import Navigation from '../components/templates/navigation';
// import { getMail } from '../service/contact';
import axios from 'axios';


const CMS_API_URL: string = process.env.CMS_API_URL + 'contact' || ''
const X_WRITE_API_KEY: string = process.env.X_WRITE_API_KEY + 'contact' || ''


const Contact = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      body: body
    };

    // const getStaticProps = async () => {
    //   const { data } = await getMail();
    //   return { props: { contents: data.contents } };
    // }
    axios({
      method: "post",
      url: CMS_API_URL,
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": X_WRITE_API_KEY
      }
    })
      .then(() => {
        router.push("./_success");
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <Head title="Contact page" description="" url="" ogImage="" />
      <Navigation />
      <p>Contact page</p>
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        />
      <p>Email</p>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      <p>Message</p>
      <textarea
        name="body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <p>Send</p>
      <button onClick={handleSubmit}>Submit Message</button>
    </div>
  );
};


// export const getStaticProps = async () => {
//   const { data } = await getMail();
//   return { props: { contents: data.contents } };
// }

export default Contact

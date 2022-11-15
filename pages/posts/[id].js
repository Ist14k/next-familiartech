import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Aside from '../../components/Layout/Aside';

const markdown = `
# Welcome to FamiliarTech
## Istiak Ahmmed Akash
Hi! I'm your first Markdown file in **Strapi**. If you want to learn about Strapi, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.
![an abstract image](https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg)

|abc|efg  |
|--|--|
|1| hello |

### Description:
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
mollitia. Totam, temporibus! Aut cum officia eligendi architecto
consequatur vero excepturi ipsa beatae unde? Laborum alias dolores
repellendus quidem labore modi.
`;

const PostDetails = props => {
  const data = props.data;
  return (
    <section className="w-full">
      <div className="relative">
        <Image
          className="rounded-md w-full md:h-[500px] object-cover object-center"
          src={data.src.large}
          width={1200}
          height={900}
          alt="post-image"
        />
        <div className="bg-gray-900 text-center bg-opacity-50 p-2 px-5 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white md:text-4xl font-bold">{data.alt}</h1>
          <p className="text-gray-300 italic font-semibold">
            by {data.photographer}
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row md:gap-x-8  mt-6">
        <article className="basis-[780px] flex-shrink-0 prose prose-headings:m-0 prose-img:rounded-md max-w-none prose-p:leading-tight">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          <h1 className="text-2xl font-bold">Response Data: </h1>
          <p className="mt-2">{JSON.stringify(data)}</p>
        </article>
        <Aside />
      </div>
    </section>
  );
};

const getServerSideProps = async context => {
  const postId = context.params.id;

  const res = await fetch('https://api.pexels.com/v1/photos/' + postId, {
    headers: {
      Authorization: '563492ad6f91700001000001fa796036b1c74db780dee4e8870bf4e2',
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export { getServerSideProps };
export default PostDetails;

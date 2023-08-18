import type { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home = (props: HomeProps) => {
  return (
    <main>
      <div>
        <Link href="/">Home</Link>
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
      </div>

      <h1>Server Side Props</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      page: 'Home',
    },
  };
};
export default Home;

import type { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

type Page1Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Page1 = (props: Page1Props) => {
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
      page: 'Page 1',
    },
  };
};

export default Page1;

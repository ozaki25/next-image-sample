import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Link href="test1">検証1</Link>
    <Link href="test2">検証2</Link>
    <Link href="test3">検証3</Link>
  </Layout>
);

export default IndexPage;

import Image from 'next/image';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <img src="/sample.png" width="270" height="480" />
    <Image src="/sample.png" width="270" height="480" />
  </Layout>
);

export default IndexPage;

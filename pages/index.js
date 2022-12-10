import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Garratt. I'm a software engineer and locksmith.<br/> You can contact me on <a href="https://github.com/gcampton">Github</a></p>
        <p>
          This is a sample website made with NextJs and React
        </p>
      </section>
    </Layout>
  );
}

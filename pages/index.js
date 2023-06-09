import CommentModal from '@/components/CommentModal';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Head from 'next/head';

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* side bar */}
        <Sidebar />

        {/* feed */}
        <Feed />
        {/* widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />

        {/* modal */}
        <CommentModal />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'
  ).then((data) => data.json());

  const randomUsersResults = await fetch(
    'https://randomuser.me/api/?results=30&inc=name,login,picture'
  ).then((data) => data.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}

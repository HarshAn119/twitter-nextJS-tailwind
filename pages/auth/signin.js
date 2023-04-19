import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        className="hidden md:inline-flex object-cover md:w-44 md:h-80 rotate-6"
        src="https://www.techbooky.com/wp-content/uploads/2021/07/4859E08D-388B-4475-9FCC-C05914CC654A.png"
        alt="twitter-img inside a phone"
      />

      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img
              className="w-36 object-cover"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="twitter-logo"
            />
            <p className="text-center text-sm italic my-10">
              This app is created with nextJS and tailwind CSS
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="rounded-lg p-3 text-red-500 border border-red-400 hover:bg-red-500 hover:text-white"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

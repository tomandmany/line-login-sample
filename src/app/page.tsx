// app/page.tsx

const HomePage = () => {
  console.log('ホームページにアクセスしました！');
  return (
    // <Providers>
    //   <RequireAuth>
    //     <main className="flex flex-col items-center justify-center min-h-screen py-2">
    //       <h1 className="text-4xl mb-4">ホームページ</h1>
    //     </main>
    //   </RequireAuth>
    // </Providers>
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">ホームページ</h1>
    </main>
  );
};

export default HomePage;

import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  const user = await session?.user;
  return (
    <>
      <h1>Server session result</h1>
      {user ? (
        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <img src={user?.image}/>
        </div>
        
      ) : (
        <p>Not logged in</p>
      )}
    </>
  )
}

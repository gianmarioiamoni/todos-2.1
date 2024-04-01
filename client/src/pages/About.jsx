import Header from "../components/Header";


export default function About() {
  return (
    <>
      {/* Header */}
      <Header
        isShowHome={true}
        isShowDashboard={true}
      />
      <div className='px-4, py-12 max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>About MERN Auth App</h1>
        <p className='mb-4 text-slate-700'>
          This is an example of authentication App using MERN (MongoDB, Express.js, React, Node.js) stack. It includes authentication features that allow uswer to sign up, login and logout and provides access to protected routes only for authenticated users.
        </p>
      </div>
      <div className="absolute bottom-2 left-0 text-xs font-extralight text-slate-500 px-4 ">
        Images by <a href="https://www.freepik.com/free-photo/protection-concept-with-lock_22632777.htm#page=2&query=authentication&position=4&from_view=keyword&track=sph&uuid=21e2b08c-0b79-47b2-8856-f2a913cf9353">Freepik</a>
      </div>
    </>
  )
}

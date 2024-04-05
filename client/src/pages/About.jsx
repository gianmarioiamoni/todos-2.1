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
        <h1 className='text-3xl font-bold mb-4 text-title'>About Todos 2.1</h1>
        <p className="mb-4 text-text">
          Todos 2.1 is the new version of Todos 2.0 project.<br /><br />       

          The new release includes a new authentication logic that allows user to sign up, login and logout and provides access to protected routes only for authenticated users.<br /><br />

          It includes also a new user profile management feature, which allows the user to manage profile picture loading and updating, username, email and password change.<br />

          Finally, a new improved navigation bar has been added.<br />
        </p>
        <p className="mb-4 text-text">
          Todos 2.0 is a Web application based on MERN stack that allows the creation of customized todo lists.<br /><br />

          The backbone of the project is baed on an idea of Colt Steele, from "The Web Developer Bootcamp 2024" course, available on Udemy.<br /><br />
          
          The main new features and improvements added in this version are the following:<br />

          - migration to MongoDB database<br />
          - new UI theme<br />
          - new Homepage with responsive Appbar<br />
          - authentication with local username/password and Google Id<br />
          - authorization<br />
          - ALL TODOs list available for each user<br />
          - added Priority and expring date to todos and editing functionalities<br />
          - todos sorting and filtering capabilities<br />
          - list deleting<br />
        </p>
      </div>
      <div className="absolute bottom-2 left-0 text-xs font-extralight text-slate-500 px-4 ">
        Images by <a href="https://www.freepik.com/free-photo/protection-concept-with-lock_22632777.htm#page=2&query=authentication&position=4&from_view=keyword&track=sph&uuid=21e2b08c-0b79-47b2-8856-f2a913cf9353">Freepik</a>
      </div>
    </>
  )
}

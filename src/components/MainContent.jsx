import Main from "./Main";
import Content from "./Content";

export const MainContent = () => {
  return (
    <div className='mainContainer'>
       <div className='main container'>
        <Main />
      </div>

      <div className='content container'>
        <Content />
      </div> 
    </div>

  )
}

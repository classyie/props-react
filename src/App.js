
import './App.css';
import Student from './Studenst';
function App() {
  return (
    <>
      <Student name="User1" age={20} isStudent={true}/>
      <Student name="User2" age={"30"} isStudent={true}/>
      <Student name="User3" age={40} isStudent={false}/>
      <Student name="User4"/>
      <Student name="User5"/>
      <Student />
    </>
  );
}

export default App;

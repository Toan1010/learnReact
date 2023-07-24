import { useState } from "react";

function App() {
  const [job,setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
  const storageJobs = JSON.parse(localStorage.getItem('jobs'));
  return storageJobs ?? [];
  });
  const [checkJob, setCheckJob] = useState('');
  

  const addList = () => {
    const isIn = jobs.includes(job) 
    if (!isIn){
      setJobs(prev => {
        const newJobs = [...prev, job];
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);
        return newJobs
      })
    }else{
      setCheckJob('has in the list');
    }
    setJob('');
  }

  return (
    <div className="App" style={{padding:50,}}>
      <input 
      value={job} 
      onChange={e => setJob(e.target.value)}
      />
      <button onClick={addList}>Add to List</button>
      <p style={{color: 'red'}}>{checkJob}</p>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>{job}</li>
          )
          })}
      </ul>
    </div>
  );
}

export default App;

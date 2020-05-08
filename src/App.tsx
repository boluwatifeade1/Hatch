import React, {useEffect, useState} from 'react';
import Table from './components/Table/Table';
import classes from './App.module.css';

const App: React.FC = () => {
  const url: string = "https://private-041255-sakura3.apiary-mock.com/applicants";
  const [ data,setData ] = useState< any[] | undefined>(undefined);
  const [ loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(loading => !loading)
      })
      .catch(error => console.log(error))
  },[]);

  const handleSort = (column:string):void => {
    if(column === 'First Name' && data){
      const updateData = [...data]
      updateData.sort((a, b) => (a['first_name'] < b['first_name'] ? -1 : 1))
      setData(updateData)
    }
    else if(column === 'Last Name' && data){
      const updateData = [...data]
      updateData.sort((a, b) => (a['last_name'] < b['last_name'] ? -1 : 1))
      setData(updateData)
    }
    else if((column === 'Credit Indicator' || column === 'Credit Score') && data){
      const updateData = [...data]
      updateData.sort((a, b) => (a['credit_indicator'] < b['credit_indicator'] ? -1 : 1))
      setData(updateData)
    }
  }

  return (
    <div className={classes.App}>
      <Table
        data={data}
        loading={loading}
        handleSort = {handleSort}
      />
    </div>
  );
}

export default App;

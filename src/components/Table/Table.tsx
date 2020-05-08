import React from 'react';
import classes from './Table.module.scss';

type Props = {
  data:any[] | undefined;
  loading:boolean;
  handleSort:(column:string) => void;
}

const Table: React.FC<Props> = (props) => {
  let columns = ["First Name", "Last Name","Created","Credit Indicator","Credit Score"];
  const score = (credit_indicator:number):string =>{
    if(credit_indicator >= 0 && credit_indicator <= 5){
      return "Bad";
    } 
    else if (credit_indicator >=5 && credit_indicator <=7){
      return "Neutral";
    }
    return "Good";
  }
  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <div className={classes.tableHeader}>
          <ul className={classes.header}>
            <li><i className="fa fa-eye-slash"></i> HideFields</li>
            <li><i className="fa fa-filter"></i> Filter</li>
            <li><i className="fa fa-sort"></i> Sort</li>
            <li><i className="fa fa-search"></i></li>
          </ul>
        </div>
        <div className={classes.tableContainer}>
          <div className={classes.tr}>
            { columns && 
              columns.map( column => {
                return(
                  <div key={column} className={classes.tableHead}>
                    {column} <i className="fa fa-caret-down" onClick={() => props.handleSort(column)}></i> 
                  </div>
                )
              })
            }
          </div>
          {props.data && 
            props.data.map((data,index) => {
              return (
                <div key={index} className={classes.tr}>
                  <div className={classes.tableData}>{data.first_name}</div>
                  <div className={classes.tableData}>{data.last_name}</div>
                  <div className={classes.tableData}>{data.created_at}</div>
                  <div className={classes.tableData}>{data.credit_indicator}</div>
                  <div className={classes.tableData}>{score(data.credit_indicator)}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Table;
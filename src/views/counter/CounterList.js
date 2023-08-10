import React, { useEffect, useState } from 'react'
const TableDetails = React.lazy(() => import('../base/tables/TableDetails'))
import Api from 'src/services/Api';
const CounterList = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    Api.get(encodeURI('http://localhost/Eclipse/Belgium/Api/counter_list'),
    {},'',null
    ).then((response)=>{
      setData(response.data.data)
     console.log(response.data.data)
    }).catch((error)=>{
    })
  },[])
  return (
    <TableDetails
      tableHeading="Counter Details"
      CTableHeadList={['Sr No', 'Counter Name', 'Number', 'Action']}
      data={data}
    />
  )
}
export default CounterList

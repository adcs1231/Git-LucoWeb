import React from 'react'
const TableDetails = React.lazy(() => import('../base/tables/TableDetails'))
const UserList = () => {
  return (
    <TableDetails
      tableHeading="User Details"
      CTableHeadList={['Sr No', 'User Name', 'Role', 'Action']}
    />
  )
}
export default UserList

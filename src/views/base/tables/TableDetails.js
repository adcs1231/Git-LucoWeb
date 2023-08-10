import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom';
const TableDetails = (props) => {
  const Navigate=useNavigate();
  //const { tableHeading, CTableHeadList,CounterData, ...rest } = props;
  console.log("CounterData",props.data)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{props.tableHeading}</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="align-items-center mb-3" key={0}>
              <CCol xs>
                <CButton color={'primary'}
                key={1} active={true}
                onClick={()=>{
                  Navigate('/counterDetailsPage')
                }}
                >
                  Add
                </CButton>
              </CCol>

            </CRow>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  {props.CTableHeadList.map((val,index)=>{
                    return <CTableHeaderCell key={index} scope="col">{val}</CTableHeaderCell>
                  })}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                  {props.data.map((item,index)=>{
                 return <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>{item.counter_name}</CTableDataCell>
                  <CTableDataCell>{item.counter}</CTableDataCell>
                  <CTableDataCell> <CButton color={'primary'}
                key={1} active={true}
                onClick={()=>{
                  Navigate('/counterDetailsPage')
                }}
                >
                  Edit
                </CButton></CTableDataCell>
                </CTableRow>
                  })}
                  {/* <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell> */}

              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TableDetails

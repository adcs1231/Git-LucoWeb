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
const TableDetails = (props) => {
  const { tableHeading, CTableHeadList, ...rest } = props
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{tableHeading}</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="align-items-center mb-3" key={0}>
              <CCol xs>
                <CButton color={'primary'} key={1} active={true}>
                  Add
                </CButton>
              </CCol>
            </CRow>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  {CTableHeadList.map((val,index)=>{
                    return <CTableHeaderCell key={index} scope="col">{val}</CTableHeaderCell>
                  })}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TableDetails

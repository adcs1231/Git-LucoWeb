import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import Api from 'src/services/Api';
import { useNavigate } from 'react-router-dom';
const CounterPage = () => {
  const Navigate=useNavigate();
  const [formData, updateFormData] = React.useState(Object.freeze({ counterName: "", counterNumber: ""}));
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    Api.post('http://localhost/Eclipse/Belgium/Api/add_counter',
    formData
    ).then((response)=>{
     console.log(response)
     Navigate('/counterDetails')
    }).catch((error)=>{

    })
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Counter Details Page</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Counter Name</CFormLabel>
                <CFormInput type="text" id="counterName" value={formData.counterName} onChange={handleChange} name="counterName" placeholder="Counter Name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Counter Number</CFormLabel>
                <CFormInput type="number" id="counterNumber" value={formData.counterNumber}  onChange={handleChange} name="counterNumber" placeholder="Counter Number" min={0} />
              </div>
              <div className="mb-3">
                <CButton color={'primary'} key={1} active={true} onClick={handleSubmit}>
                  Save
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default CounterPage

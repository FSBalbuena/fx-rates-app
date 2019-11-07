import React from 'react'
import PropTypes from 'prop-types'
import {FormBackground,FormBox,
      FormButton,Rate} from './components'
import {Error} from '../StoryBook'
import {Formik} from 'formik'
import FeePicker from './FeePicker';
import CurrencySelector from './CurrencySelector';
import RatePreview from './RatePreview';



const CreateComponent=({rate,loading,uiLoading,selectors,fee,formProps,handleSelect,error,text})=>(
        <FormBackground bg={"#4E42E2"} >
        {!loading?
        <Formik validateOnChange {...formProps}>
            {(form)=>(
                 <FormBox>
                     {error && <Error>{text.error}</Error>}
                     {selectors.map(select=>(
                         <CurrencySelector key={select.name}
                         name={select.name} 
                         label={select.label}
                         handleChange={handleSelect.bind(this,select.name,form)}
                         options={select.options}/>
                     ))}
                    {   uiLoading?
                        <Rate>{text.loading}</Rate>
                        :
                        <RatePreview rate={rate}/>
                    }
                    <FeePicker name={fee.name} feeTypes={fee.types}
                    label={fee.label}/>
                    <FormButton type="submit"
                    onClick={form.handleSubmit} >
                        {text.button}
                   </FormButton>
                </FormBox>
            )}
        </Formik>:null}
        </FormBackground>
    )

CreateComponent.propTypes={
    rate:PropTypes.array,
    loading:PropTypes.bool,
    uiLoading:PropTypes.bool,
    selectors:PropTypes.array,
    feeTypes:PropTypes.array,
    handleSubmit:PropTypes.func,
    handleSelect:PropTypes.func,
    initialValues:PropTypes.object,

}
export default CreateComponent
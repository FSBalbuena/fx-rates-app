import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchSingleRatesPair} from '../../redux/actions/singleRatesPair-actions'
import {createCustomRate} from '../../redux/actions/customRate-actions'
import {fetchSymbols} from '../../redux/actions/symbols-actions'
import CreateRateForm from '../components/CreateRateForm'
import _ from 'lodash'
import * as yup from 'yup'
/*Utils*/
const listToOptions=(list)=>list.map(item=>({value:item,content:item}))

/*Container */
const CreateRateContainer= ({
    fetchSingleRatesPair,
    createCustomRate,
    customRate,
    fetchSymbols,
    symbols,
    singleRatesPair,
    history,
uiLoading})=>{

/*First fetch to Symbols and Rates */
    useEffect(
        ()=>{
            if(_.isEmpty(symbols.data)){
                fetchSymbols()
            }else{
                let base=symbols.data[0]
                let destination=symbols.data[0]
                fetchSingleRatesPair({base,destination})
            }
        },[symbols.data]
    )

/*Props for formik */
const initialValues={
    base:symbols.data[0],
    destination:symbols.data[0],
    fee:{
        value:0.1,
        type:"amount"
    }}
const validationSchema=yup.object().shape({
    base:yup.string("Must be a string")
    .required("Base Currency Required"),
    destination:yup.string("Must be a string")
    .required("Destination Currency Required"),
    fee:yup.object().shape({
        type:yup.string("Must be a string")
        .matches(/amount|percent/,"Must be a valid fee type")
        .required("Fee Type is required"),
        value:yup.number("must be a number")
        .positive("must be positive")
        .required("Value is required")
    })
})

/*Handlers*/

const handleSubmit=(values)=>{
    values.fee.value=Number(values.fee.value)
    createCustomRate(values)
    history.push("/custom-rate")
}
const handleSelect=(name,form,e)=>{
    //1-updates the field on form, as usual
    //2-Already fetchs information with actual field values
    let value=e.target.value
    form.setFieldValue(name,value)
    let {base,destination}={...form.values,[name]:value}
    fetchSingleRatesPair({base,destination})
}
/*Object of data that will pass to our component */

    const data={
        uiLoading,
        loading:symbols.loading,
        rate:singleRatesPair,
        text:{
            button:"CREATE",
            loading:"loading...",
            error:"Network Error"
        },
        error:!_.isEmpty(customRate.error),
        formProps:{
            initialValues,
            validationSchema,
            onSubmit:handleSubmit
        },
        fee:{
            name:"fee",
            label:"Fee",
            types:[
                    {value:"amount",content:"$"},
                    {value:"percent",content:"%"}
                ]
        },
        selectors:[{
            name:"base",
            label:"Base Currency",
            options:listToOptions(symbols.data)
        },
        {
            name:"destination",
            label:"Destination Currency",
            options:listToOptions(symbols.data)
        }],
        handleSelect
    }



    return <CreateRateForm 
            {...data}
            />
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    uiLoading:state.ui.loading,
    symbols:state.symbols,
    singleRatesPair:state.singleRatesPair.data,
    history:ownProps.history,
   customRate:state.customRate,

})
const mapDispatchToProps=(dispatch,ownProps)=>({
    fetchSymbols:()=>dispatch(fetchSymbols()),
    fetchSingleRatesPair:(body)=>dispatch(fetchSingleRatesPair(body)),
    createCustomRate:(body)=>dispatch(createCustomRate(body))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateRateContainer)
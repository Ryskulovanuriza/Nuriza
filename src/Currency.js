import React, { Component } from 'react'
import axios from 'axios'
import {InputGroup,FormControl} from 'react-bootstrap'


export default class Axios extends Component {
    state={
        select1:'',
        inpt:'',
        slct:'',
        ss:'',
        rr:'',
    }
    
    componentDidMount(){
        const a = axios.get('https://www.cbr-xml-daily.ru/latest.js');
        a.then((v)=>{
            this.setState({select1:v.data.rates})
            console.log(v.data)
        })
    }
    
    
    render() {
        
        console.log(this.state.select1)
        const obj = Object.keys(this.state.select1)
        return (
            <>
      <div style={{display:'flex'}}>
      <select onChange={(e)=>this.setState({rr:e.target.value})} style={{width:100}} className="form-select form-select m-2" aria-label=".form-select-sm example">
   {obj.map((y)=> <option>{y}</option> )}
   </select>
                <InputGroup  style={{width:300}} className="inp mb-1 m-1">
    <FormControl
    onChange={(e)=>this.setState({inpt:e.target.value})}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  
  <select onChange={(e)=>this.setState({slct:e.target.value})} style={{width:100}} className="form-select form-select m-2" aria-label=".form-select-sm example">
   {obj.map((y)=> <option>{y}</option> )}
   </select>
   <button onClick={()=>{
        this.setState((p)=>{
            const j = (this.state.inpt*this.state.select1[this.state.slct])/this.state.select1[this.state.rr]
            return{
                ss:j
            }
                })
   }}>ok</button>
   <h1>
       {this.state.ss}
       </h1> 
             </div>


           
            </>
        )
    }
}
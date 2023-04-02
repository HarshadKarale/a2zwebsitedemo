import React from 'react';

/*var Prod1=(props)=>{
    return(
        <div className='card text-center bg-primary h-100 w-100'>
            <div className='card-header'>
                <h1 className='text-warning'>{props.name}</h1>
            </div>
            <div className='card-body'>
                <img src={props.img} className='h-100 w-100'></img>
            </div>
            <div className='card-footer'>
                <h5>{props.desc}</h5>
            </div>
        </div>
    )
}
export default Prod1;*/

class Prod1 extends React.Component{
    render(){
        function demo(){
            document.getElementById('card1');
        }
        return(
            <div className='card text-center bg-primary h-100 w-100' id='card1'>
            <div className='card-header bg-warning'>
                <h1 className='text-primary'>{this.props.name}</h1>
            </div>
            <div className='card-body'>
                <img src={this.props.img} className='h-100 w-100'></img>
            </div>
            <div className='card-footer bg-warning'>
                <h5>{this.props.desc}</h5>
                <button className='btn btn-primary' onClick={()=>demo()}>View</button>
            </div>
        </div>
        )
    }
}
export default Prod1;
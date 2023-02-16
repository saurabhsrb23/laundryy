import React,{useState} from 'react'
import './TRproduct.css'
import PastSummary from '../pastSummary/pastSummary'
import { AiOutlineEye } from 'react-icons/ai';

const TRproduct = ({product,key,user}) => {

    const closeOrder = () => setshowOrder(false);
    const [showOrder, setshowOrder] = useState(false)
    const [showOrder1, setshowOrder1] = useState(0)
    const [CanceDirect, setCanceDirect] = useState('cancel order')
    const [CanceD, setCanceD] = useState('In progress')
    const Orderid= product._id
    const DateP=product.createdAt
    const t =product.orderdate

    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();

    const Timex=DateP.substr(11,5)



   function timeCal(){

      setCanceDirect('Canceled')
       setshowOrder1(1)
           setCanceD('Canceled')
    
        let hrs=Timex.substr(0,2)
        let min= Timex.substr(3,2)
    let timeHrs=time.substr(0,2)
    let timeTim=time.substr(3,2)

        let intHrs= parseInt(hrs)
        let intMin=parseInt(min)
        
       

    }



  return (
              <tr className='pastOrdercontainerBody'>
              <td> {Orderid.substr(5,6) }</ td>
              < td> {DateP.substr(0,10)+" & "+t}</ td>
              < td> Gp nagar</ td>
              < td> Motihari</ td>
              < td>{user.Phone ? user.Phone : '6204058598'}</ td>
              < td> {product.totalquantity}</ td>
              < td> {product.totalcost} </ td>
              < td> {showOrder1==1?'Canceled':  CanceD}</ td>
              < td> <span id='cancelXbtn' onClick={timeCal}>{CanceDirect}</span>  </ td>
              < td>
                <AiOutlineEye onClick={() =>{setshowOrder(true)}} />
              </ td>
        {showOrder && <PastSummary closeOrder={closeOrder} />}
            </tr>
  )
}

export default TRproduct

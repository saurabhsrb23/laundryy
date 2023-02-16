import React from 'react'
import swal from 'sweetalert';
import './Cancelsummary.css'

const Cancelsummary = () => {
  return (
    <div className=''>
   {
    swal({
      title: "order summary!",
      text: "Your order already is canceled!",
      icon: "success",
      button: "Procced",
    }).then(function() {
      window.location = "/createOrder";
  })
   }
    </div>
  )
}

export default Cancelsummary
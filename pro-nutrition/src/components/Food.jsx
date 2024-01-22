import React, { useState } from "react";

function Food(props){
    let{ele, index} = props;
    let {img, name, cal} = ele;

    const [input, setInput] = useState(0);
    const [quantity, setQuantity] = useState(0)

    function quantityHandler(){
        setQuantity(input)
    }
    return (
        <>
            <div className="main">
        <div className="one">
          <img src={img} alt="itempic" />
          <div>
            <span>{name}</span>
            <span>{cal}</span>
          </div>
          <input
            type="number"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button onClick={quantityHandler}>+</button>
        </div>
        <p>
          {quantity} {name} = {cal * quantity} calories
        </p>
        <button
          onClick={() => {
            setInput(0);
            setQuantity(0);
          }}
          className="reset"
        >
          Reset
        </button>
      </div>
        
        </>
    )
}

export default Food;
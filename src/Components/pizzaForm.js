import React from "react"

const Form = (props) => {
    const {change, submit, errors} = props
    const {values} = props

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
            <form id="pizza-form" onSubmit={onSubmit}>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
                <div>
                    <label> Order Name:
                        <input id="name-input"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Pizza Size
                        <select id="size-dropdown"
                            name="size"
                            value={values.size}
                            onChange={onChange}
                        >
                            <option>-Select Pizza Size-</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>                    
                    </label>
                </div>
                <div>
                    <h2>Toppings</h2>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type="checkbox"
                            name="sausage"
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Ham
                        <input 
                            type="checkbox"
                            name="ham"
                            checked={values.ham}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Special Instructions
                        <input id="special-text"
                            name="special"
                            type="text"
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <input 
                        type="submit"
                        value="Place Order"
                    />
                </div>
            </form>
    )
}

export default Form;
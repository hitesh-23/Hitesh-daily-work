import React, { useState } from 'react'
import { categories } from '../../constants/add-expense';
import './add-form.css';

const AddForm = () => {

    const categori = categories;

    const [categoryOpen, setCategoryOpen] = useState(true);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(null);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount("")
            return;
        }
        setAmount(val);


        setAmount(e.target.value);
    }

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
        
    }





    return (
    
        <div className="add-form">
            <div className="form-item">
                <label>Title</label>
                <input placeholder="Give a name to your expenditure" value={title} onChange={(e)=>handleTitle(e)} />
            </div>


            <div className="form-item">
                <label>Amount ₹</label>
                <input placeholder="Enter amount" className="amount-input"  value={amount} onChange={(e)=>handleAmount(e)} />
            </div>

            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={()=>setCategoryOpen(!category)}>
                        <label>Category</label>
                    </div>
                    {
                        categoryOpen && <div className="category-container">
                            {
                                categori.map((cat) => {
                                    <div className="category-item" key={cat.id} style = {{ borderRight: `5px solid ${cat.color}`}} onClick={()=>handleCategory(cat)} >
                                        <label>{cat.title}</label>

                                    </div>
                                })
                            }
                        </div>
                    }
                </div>
            </div>
           
        </div>
    )
}

export default AddForm

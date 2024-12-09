import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const quantity = form .quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee= {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4f3f0] p-24">
            <h2 className="text-3xl font-semibold">AddCoffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* Name and Quantity row  */}
                <div className='md:flex mb-8'>
                        <div className="form-control flex-1 md: w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        

                        <div className="form-control flex-1 md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Supplier */}
                <div className='md:flex '>
                        <div className="form-control flex-1 md: w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="supplier name" className="input input-bordered" required />
                        </div>
                        

                        <div className="form-control flex-1 md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="category" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Taste  */}
                <div className='md:flex '>
                        <div className="form-control flex-1 md: w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="taste" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1 md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Details" className="input input-bordered" required />
                        </div>
                        
                   
                       
                    </div>
                        <div className="form-control flex-1 md:w-full ml-4 mb-8">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                            </div>

                            
                            <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;





import React from 'react'
import Title from '../../Shared/Title'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_imagebb_key;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()

    const handleFormSubmit = async (data) => {
        //upload img to imagebb and get a url  
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_url, imgFile, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        });
        console.log(res.data)
        if (res.data.success) {
            // sending the data to database
            const product = {
                name: data.name,
                price: parseFloat(data.price),
                stock: data.stock,
                category: data.category,
                brand: data.brand,
                imageUrl: res.data.data.display_url, //the hosting url
                describtion: data.describtion
            }
            console.log(product)
            const productRes = await axiosSecure.post('/components', product)
            console.log(productRes.data)
            if (productRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${product.name} added Successfully`,
                    showConfirmButton: false,
                    timer: 1000
                });
            }

        }


    }
    return (
        <>
            <Title heading={'Add New Product'} subheading={'Fill up the form to add a new component'} />
            <div className='px-6'>
                <form className='mx-4 px-6' onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Components Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled defaultValue>Category</option>
                                <option value="processor">Processor</option>
                                <option value="motherboard">Motherboard</option>
                                <option value="ssd">SSD</option>
                                <option value="ram">Ram</option>
                                <option value="hdd">Hard Disk</option>
                                <option value="case">Casing</option>
                                <option value="psu">Power Supply</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="mouse">Mouse</option>
                            </select>
                        </div>
                        {/* brand */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Brand*</span>
                            </label>
                            <select defaultValue="default" {...register('brand', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled defaultValue>Brand</option>
                                <option value="asus">Asus</option>
                                <option value="team">Team</option>
                                <option value="msi">MSI</option>
                                <option value="hp">HP</option>
                                <option value="corsair">Corsair</option>
                            </select>
                        </div>

                        {/* price */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/* stock */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Stock*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Stock"
                                {...register('stock', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* component details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Component Details</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description..."></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="w-1/4 mt-12 ">
                        <button className="button">Add Product</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProducts
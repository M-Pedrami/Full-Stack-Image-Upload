import { useForm } from 'react-hook-form';
import axios from 'axios';

const ProductForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('image', data.image[0]);

      // Send formData to the server using axios or any other HTTP library
      const response = await axios.post('http://localhost:5000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Product Name:
        <input type="text" name="name" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>

      <label>
        Product Price:
        <input type="number" name="price" {...register("price", { required: true, min: 0 })} />
        {errors.price && <span>This field is required and must be greater than or equal to 0</span>}
      </label>

      <label>
        Product Image:
        <input type="file" name="image" {...register("image", { required: true })} />
        {errors.image && <span>This field is required</span>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;

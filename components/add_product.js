export default (product) => {
  return `
   ${product ? "" : "<h2 class='data_heading'>Add Course</h2>"}
   <form id="add_product_form">
     <div>
       <label for="title">Title</label>
       <input id="title" type="text" placeholder="image link"  required>
     </div>
     <div>
       <label for="brand">Brand</label>
       <input id="brand" type="text" placeholder="course name"  required>
     </div>
     <div>
       <label for="price">Price</label>
       <input id="price" type="number" placeholder="Price" required>
     </div>
     <div>
       <label for="discount">Discription</label>
       <input id="discount" type="text" placeholder="Course Discription" required>
     </div>
     <div>
       <input type="submit">
    </form>
   `;
}


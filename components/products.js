import popup from "./popup.js"
export default (data, data_div) => {
  let popup_div = document.getElementById("popup");
  let table = `
  <h2 class="data_heading">Products</h2>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Image link</th>
      <th>Name</th>
      <th>Discription</th>
      <th>price</th>
      
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="products_div">
  </tbody>
  </table>
  `
  data_div.innerHTML = table;
  console.log("all data", data)

  const tbody = document.getElementById("products_div");

  data.forEach((elm) => {
    let row = document.createElement("tr")

    let id = document.createElement("td");
    id.textContent = elm.id;

    let title = document.createElement("td");
    title.textContent = elm.image;

    let brand = document.createElement("td");
    brand.textContent = elm.name;


    let price = document.createElement("td");
    price.textContent = elm.discription;


    let discount = document.createElement("td");
    discount.textContent = elm.price;

    // let category = document.createElement("td");
    // category.textContent = elm.category;

    // let description = document.createElement("td");
    // description.textContent = elm.description;

    let edit = document.createElement("td");
    let edit_icon = document.createElement("i");
    edit_icon.className = "bx bx-edit";
    edit.append(edit_icon)
    edit.onclick = () => {
      popup_div.innerHTML = popup(elm);

      let edit_modal = new bootstrap.Modal(document.getElementById("edit_modal"), {});
      edit_modal.show();
      console.log(popup_div)
      let product_form = document.getElementById("add_product_form");
      console.log(product_form)
      product_form.onsubmit = async(e) => {
        e.preventDefault();
        alert("clicked")
        let image = product_form.title.value;
        let name = product_form.brand.value;
        let price =+product_form.price.value;
        let discription = product_form.discount.value;
        let obj={image,name,discription,price}
        console.log(obj)
        let res=await fetch(`http://localhost:3000/admincourse/${elm.id}`,{
          method:"PATCH",
          body:JSON.stringify(obj),
          headers:{
            "Content-Type":"application/json"
          }
         })
        //addProduct();
        //add_product()
    
    
      }

    }

    let remove = document.createElement("td");
    let remove_icon = document.createElement("i");
    remove_icon.className = "bx bx-x";
    remove.append(remove_icon)
    remove.onclick=async(event)=>{
      event.preventDefault()
      let res= await fetch(`http://localhost:3000/admincourse/${elm.id}`,{
          method:"DELETE"

      })
      // window.location.href=""


  }


    row.append(id, title, brand, price, discount, edit, remove);
    tbody.append(row)
  })


}
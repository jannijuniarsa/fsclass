const testimonialsData = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/0bf4d8d119cc21853041",true);
  xhr.onload = function () {
    if(xhr.status == 200){
      resolve(JSON.parse(xhr.response))
    } else {
      reject("Error Loading Data")
    }
  }
  xhr.onerror = function(){
    reject("Network Error")
  }
  xhr.send()
})
 
async function allTestimonials() {
  try {
    const response = await testimonialsData

  let testimonialsHTML = "";
  
    response.forEach(function (item) {
      testimonialsHTML += `
              <div class="testimonial-card">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
    });
  
    document.getElementById("testimonial").innerHTML = testimonialsHTML;
  } catch (err) {
      console.log(err);
  }
}
  allTestimonials();
  
  // filtered testimonial
async function filterTestimonials(rating) {
    try {
      const response = await testimonialsData
    let testimonialsHTML = "";
  
    const testimonialsFiltered = response.filter(function (item) {
      return item.rating === rating;
    });
  
    //   console.log(testimonialsFiltered);
  
    if (testimonialsFiltered.length === 0) {
      testimonialsHTML += `<h1> Data not found! </h1>`;
    } else {
      testimonialsFiltered.forEach(function (item) {
        testimonialsHTML += `
              <div class="testimonial-card">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
      });
    }
  
    document.getElementById("testimonial").innerHTML = testimonialsHTML;
  } catch(err){
    console.log(err);
  }
}
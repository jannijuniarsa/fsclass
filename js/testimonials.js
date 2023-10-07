const testimonialsData = [
    {
      author: "Gabriela",
      quote: "This is so great! I hope more updates in future",
      image:
      "https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 5,
    },
    {
      author: "Black_All_Matter",
      quote: "I like the project, i need more!",
      image:
        "https://images.unsplash.com/photo-1694875294031-169b75f14a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      rating: 4,
    },
    {
      author: "Ai Hoshino",
      quote: "I see a few bug, but overall it's okay",
      image:
        "https://media.suara.com/pictures/970x544/2023/05/11/33964-anime-oshi-no-ko-imdb.jpg",
      rating: 3,
    },
    {
      author: "Cat lady",
      quote: "This is so bad, not recommended!",
      image:
        "https://images.unsplash.com/photo-1617909962641-473bd11a1afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=800",
      rating: 1,
    },
    {
      author: "Michael",
      quote: "This is good for newbie like me",
      image:
        "https://media.istockphoto.com/id/1271957295/photo/distance-learning-from-home-on-video-conference.webp?b=1&s=170667a&w=0&k=20&c=g2UarF2bBwr-ws_wOXRMBtTj7EVP604PJKg8-ti30B4=",
      rating: 4,
    }
  ];
  
  function allTestimonials() {
    let testimonialsHTML = "";
  
    testimonialsData.forEach(function (item) {
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
  }
  
  allTestimonials();
  
  // filtered testimonial
  function filterTestimonials(rating) {
    let testimonialsHTML = "";
  
    const testimonialsFiltered = testimonialsData.filter(function (item) {
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
  }
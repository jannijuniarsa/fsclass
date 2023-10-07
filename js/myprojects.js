let dataBlog = []

function addBlog(event){
    event.preventDefault();
     
    let title = document.getElementById("input-project-name").value;
    let content = document.getElementById("input-description-project").value;
    let image = document.getElementById("input-project-image").files;

    image = URL.createObjectURL(image[0]);
    
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
    let duration = []
    if (startDate.getTime() && endDate.getTime()){
        let timeDifference = endDate.getTime()- startDate.getTime();
        let dayDifference = Math.abs(timeDifference / (1000*3600*24));
        duration.push(dayDifference);
    } else {
        alert("Input valid date");
    }
    
    let nodeJs = document.getElementById("nodeJs");
    let nextJs = document.getElementById("nextJs");
    let reactJs = document.getElementById("reactJs");
    let typeScript = document.getElementById("typeScript");
    let checkboxes = []

    if(nodeJs.checked){
      checkboxes += `<i class="fa-brands fa-node-js"></i>`;
    } else {
      checkboxes += ``;
    }
    if(nextJs.checked){
      checkboxes += `<<img src="img/next-js.256x256.png" alt="">`
    } else {
      checkboxes += ``;
    }
    if(reactJs.checked){
      checkboxes += `<i class="fa-brands fa-react"></i>`
    } else {
      checkboxes += ``;
    }
    if(typeScript.checked){
      checkboxes += `<img src="img/typescript.png" alt="">`
    } else {
      checkboxes += ``;
    }

    let blog = {
        title,
        content,
        image,
        duration,
        checkboxes
      };
    
      dataBlog.push(blog);
      renderBlog()
}


function renderBlog() {
    document.getElementById("contents").innerHTML = "";
  
    for (let index = 0; index < dataBlog.length; index++) {
      console.log(dataBlog[index]);
  
      document.getElementById("contents").innerHTML += `
      <div id="contents" class="blog-contents">
      <div class="blog-card">
      <img src="${dataBlog[index].image}">
      <h3><a href="blog-project.html">${dataBlog[index].title}</a>
        </h3>
      <h4>durasi :${dataBlog[index].duration} days</h4> <br>
      <p>${dataBlog[index].content}</p>
      <div class="icon-tech">
      ${dataBlog[index].checkboxes}
    </div>
      <div class="btn-blog">
        <button class="btn-blog-edit">Edit</button>
        <button class="btn-blog-delete">Delete</button>
      </div>
    </div>
    </div>
      `;
    }
  }
  
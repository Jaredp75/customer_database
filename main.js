//let table = document.getElementByClassName("container");
//let header = table.createTHead();
//let row = header.insertRow(0);
//innerHTML = "<b>INTERNAL COMPANY DIRECTORY</b>";


let custTemplate = document.getElementByClassName("container");
  for (let i = 0; i < customers.results.length; i++) {
    let placeholder = `
      <div style="margin: 2% 0%;">
        <img src=${customers.results[i].picture.thumbnail}` style="width: 200px; height: 200px;">
      </div>
    `;


custTemplate.innerHTML += placeholder;
}



let setParent = document.getElementById("flexbox_project_holder");
	for (let i = 0; i < customers.results.length; i++){
	  let holder = `
	    <div style="margin: 2% 0%;">
	      <img src=${customers.results[i].picture.large} style="width: 250px; height: 250px;">
	      <h2 style="text-decoration: underline; text-decoration-color: #5BFFC0; font-size: 20px;">${customers.results[i].name.first.toUpperCase()} ${customers.results[i].name.last.toUpperCase()}</h2>
	      <p id="email_holder" style="font-size: 13px;">${customers.results[i].email.toUpperCase()}</p>
	      <p>${customers.results[i].location.street}<br>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br>${customers.results[i].cell}<br></p>
	      <span>${customers.results[i].id.value}</span>
	    </div>
	  `;
	  setParent.innerHTML += holder;
	}










//createHeader();
//	function createHeader(){
//	  let setHtml = document.querySelector("html");
//	  setHtml.setAttribute("style", "text-align: center; margin: 0px; padding: 0px; font-family: 'Roboto', sans-serif;");
//	  let setHeader = document.querySelector("body");
//	  let holder = `
//	  <h1>INTERNAL COMPANY DIRECTORY</h1>
//	  <div id="flexbox_project_holder" style="display: flex; justify-content: space-around; flex-flow: row wrap; padding: 2% 10%;"></div>
//	  `;
//	  setHeader.innerHTML = holder;
//	}



//const container = document.querySelector('.container');
//const title = "INTERNAL COMPANY DIRECTORY";
//let template;

//template = `<h1>${title}</h1>;`
//template += "<ul>";
//customers.forEach(function (customer) {
//  template += `<li>${customers.results.name.first}</li>`;
//});
//template += "</ul>";
//container.innerHTML = template;





//  <article>
//    <h2>${blogPost.title}</h2>
//    <div class="meta">
//      <span class="date">Written on ${blogPost.meta.date}</span>
//    </div>
//    <div class="post">
//      <img src="${blogPost.post.image}">
//      ${blogPost.post.content}
//    </div>
//    <div class="site">
//      Part of this content was pulled from <a //href="${blogPost.site.url}">${blogPost.site.name}</a>
//    </div>
//  </article>
//`;

// Insert the template onto our page
//document.querySelector('.container').innerHTML = customerTemplate

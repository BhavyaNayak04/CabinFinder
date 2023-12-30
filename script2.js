document.addEventListener("DOMContentLoaded", function()
{
    const frm = document.getElementById('frm');
    const button = document.getElementById("subButton");
    frm.addEventListener("submit", function(e)
    {
          e.preventDefault();
          button.disabled = true;
          button.classList.add("button-loader");
          const Teacher = document.getElementById("teacher");
          var Name = Teacher.value;
          if(Name !== "")
          {
              const url = `search.php?q=${Name}`;
              fetch(url)
                 .then(response => response.json())
                 .then(data => {
                       console.log(data);
                       if (data.error)
                        {
                        console.error("Error fetching data");
                        const display = document.getElementById('mydiv');
                        display.innerHTML = "";
                            var image = document.createElement('img');
                            image.src = "fail.png";
                            image.className = 'error';
                            var msg = document.createElement('p');
                            msg.className = 'error';  
                            msg.textContent = "No match found. Try again."
                            display.appendChild(image);
                            display.appendChild(msg);
                            button.disabled = false;
                             button.classList.remove("button-loader");
                         }
                       else
                       {
                          var movingDiv = document.getElementById("mydiv");
                          movingDiv.innerHTML = "";
                          data.forEach(teacher=>
                          {
                            var container = document.createElement("div");
                            container.className = "container";

                            var Timage = document.createElement("img");
                            var TName = document.createElement("p");
                            var TDept = document.createElement("p");
                            var TLoc = document.createElement("p");
              
                            Timage.src = 'data:image/jpeg;base64,'+ teacher.Image;
                            Timage.className = 'imgfix';
                            TName.textContent = teacher.Name.trim();
                            TDept.textContent = teacher.Dept.trim();
                            TLoc.textContent = teacher.Location.trim();

                            TLoc.style.backgroundColor = "lightgreen";

                            container.appendChild(Timage);
                            container.appendChild(TName);
                            container.appendChild(TDept);
                            container.appendChild(TLoc);
              
                            movingDiv.appendChild(container);

                            button.disabled = false;
                             button.classList.remove("button-loader");
                         });
                          
                       }
                 })
                .catch(error => console.error('Error:', error));
          }
          else
          {
            alert("Enter a name!");
          }
    });
});

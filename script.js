document.addEventListener("DOMContentLoaded", function()
    {
         const list = [
             {Name: "DR. NIRANJAN N. CHIPLUNKAR", Desg: "Principal", cabin:"APJ Kalam Block, 0th floor", image:"https://nitte.edu.in/admin/photo/3/faculty/5/52.jpg"},
             {Name: "DR. I RAMESH MITHANTHAYA", Desg: "Vice Principal & Dean (Academics)", cabin:"APJ Kalam Block, 0th floor", image: "https://nitte.edu.in/admin/photo/3/faculty/4/22.jpg"},
             {Name: "Dr. SHRINIVASA RAO B.R.", Desg: "Vice Principal & Controller of Examinations", cabin:"APJ Kalam Block, 0th floor", image: "https://nitte.edu.in/admin/photo/3/faculty/9/252.jpg"},
         ];
        var movingDiv = document.getElementById('my2div');
        list.forEach(teacher=>
            {   
                var designation = document.createElement('p');
                var name = document.createElement('p');
                var cabin = document.createElement('p');
                var newDiv = document.createElement('div');
                var photo = document.createElement('img');
                designation.textContent = teacher.Desg;
                name.textContent = teacher.Name;
                cabin.textContent = teacher.cabin;
                cabin.style.backgroundColor = "lightgreen";
                photo.src = teacher.image;
                photo.className = 'imgfix';
                newDiv.appendChild(designation);
                newDiv.appendChild(photo);
                newDiv.appendChild(name);
                newDiv.appendChild(cabin);
                newDiv.className = 'dept1';
                movingDiv.appendChild(newDiv);
                
            });
            
        });
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msg").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    let arr =JSON.parse(localStorage.getItem('contact'));
    if(arr == null)
    {
    var contact_data = [
      { name,
        subject,
        phone,
        email,
        message,
      },
    ];
    localStorage.setItem('contact',JSON.stringify(contact_data));
    }
    else{
      arr.push({
        name,
        subject,
        phone,
        email,
        message,
      });
      localStorage.setItem('contact',JSON.stringify(arr));
    }
    
    alert("Form Submitted Successfully!");
    return true;
  }

  let key ='about';  
  document.getElementById('new_about').value=localStorage.getItem(key);

  document.getElementById('about-about').innerHTML=localStorage.getItem(key)+`<a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fa fa-pen"></span></a> `;

  document.getElementById('about-home').innerHTML=localStorage.getItem('about');
  
  function save_new_data()
  {
    new_data = document.getElementById('new_about').value;
    localStorage.setItem(key,new_data);
  }



function display_contact(){
  let arr = JSON.parse(localStorage.getItem('contact'));
  if (arr != null) {
    var data ='';
    for(i in arr)
    {
      data= data+
      `<tr>
      <td>${arr[i].name}</td>
      <td>${arr[i].subject}</td>
      <td>${arr[i].email}</td>
      <td>${arr[i].phone}</td>
      <td>${arr[i].message}</td>
      </tr>`
    }
    document.getElementById('tbody').innerHTML=data;
  }
}

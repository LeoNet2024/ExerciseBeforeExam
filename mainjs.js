"use strict";

let contactList=
[
    {
        "name":"Eyal Shani",
        "address": "Aba Hoshi Haifa",
        "phonenumber": "0509939020"
    },
    {
        "name":"Assaf granit",
        "address": "Tel Aviv Hayarkon",
        "phonenumber": "0508089020"

    },
    {
        "name":"Tomer Tomas",
        "address": "Tel aviv Yad Labanim",
        "phonenumber": "0544977711"

    },
    {
        "name":"Haim Cohen",
        "address": "Tel Aviv Gordon",
        "phonenumber": "0522595959"
    }
];

let listOfUsers=
[
    {
    "EmailAdress":"leon",
    "password":"Aa123456"
    }
];

renderContacts();

function renderContacts()
{
    restartMain()
    let ul = document.getElementById('ullist');

    let headline= document.getElementById('mainheadline');
    headline.innerHTML = "Book Phone"

    contactList.forEach((elem,index)=>
    {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let btn = document.createElement('button')
        let btn2 = document.createElement('button')
        li.innerHTML =
        `
        ${elem.name}  ${elem.phonenumber}
        `;
        ul.append(div);
        div.classList = ('divcontacts')
        div.append(li);
        div.append(btn)
        btn.classList="editpic"
        btn.onclick=function()
        {
            editContact(index);
        }
        div.append(btn2)
        btn2.onclick = function()
        {
            deleteContact(index);
        }
        btn2.classList="deleteContactPic"
    });

    
}


function deleteContact(index)
{
    let flag = confirm("This action will remove all  contacts, Are you sure?")
    if (flag){
    restartMain()
    contactList.splice(index,1);
    renderContacts();
    }
}

function restartMain()
{
    let ul = document.getElementById('ullist');
    ul.innerHTML="";
}

function editContact(index)
{
    let headline = document.getElementById('headline');
    headline.innerHTML= "Edit Contact"
    let item = document.querySelector('.formwrap');
    item.style.display= "block";
    document.getElementById('editname').value = contactList[index].name;
    document.getElementById('editaddress').value = contactList[index].address;
    document.getElementById('editphone').value = contactList[index].phonenumber;

    let btn = document.createElement('button');
    let form = document.getElementById('editform')
    form.append(btn);
    btn.innerHTML = "save";
    btn.className="saveButonForDelete";

    btn.onclick = function()
    {
    let headline = document.getElementById('headline');
    headline.innerHTML= "edit contact";
    let name = document.getElementById('editname').value 
    let address = document.getElementById('editaddress').value 
    let phone = document.getElementById('editphone').value 
        saveChangeEdit(index,name,address,phone);
    }

}

function saveChangeEdit(index,name,address,phone)
{
    
    if (!isValidContact(phone) || !uniqContact(phone))
        validNumberReturnErrorMessage(phone);

    else
    {
        console.log("saveIt")

    contactList[index].name = name;
    contactList[index].address = address;
    contactList[index].phonenumber = phone;
    
    closeEditPop();
    renderContacts();
    }


}

function closeEditPop()
{
    let pop = document.querySelector('.formwrap')
    pop.style.display= "none";
    let btn = document.querySelector('.saveButonForDelete'); 
    clearFormFileds();
    btn.remove();

}

function removeAllContacts()
{
    let flag = confirm("This action will remove all  contacts, Are you sure?")
    if (flag)
    {
    restartMain();
    contactList = [];
    }
}

function addNewContact()
{
    let headline = document.getElementById('headline');
    headline.innerHTML= "Save contact";
    let item = document.querySelector('.formwrap');
    item.style.display= "block";

    let btn = document.createElement('button');
    let form = document.getElementById('editform')
    form.append(btn);
    btn.innerHTML = "Add new Contact";
    btn.className="saveButonForDelete";

  

    btn.onclick = function()
    {
        let name = document.getElementById('editname').value 
        let address=document.getElementById('editaddress').value 
        let phonenumber= document.getElementById('editphone').value
        saveTheNewContact(name,address,phonenumber);
    }

}

function saveTheNewContact(name,address,phonenumber)
{

    if (  !uniqContact(phonenumber)|| !isValidContact(phonenumber))
        validNumberReturnErrorMessage(phonenumber)
    else
    {
    contactList.push
    (
        {
            name,
            address,
            phonenumber
        }
    );

    closeEditPop();
    renderContacts();
    clearFormFileds();
}
}


function clearFormFileds()
{
   document.getElementById('editname').value =""
    document.getElementById('editaddress').value =""
    document.getElementById('editphone').value =""
}

function darkmode()
{
    let body= document.querySelector('body');
    body.classList.toggle('darkmode');
    let classWrap= document.querySelector('.classWrap');
    classWrap.classList.toggle('darkmode');


}

function logInUser()
{
    let saveindex= 0;
    let login = document.querySelector('.loginwrap'); 
    login.style.display="block";   


    let btn = document.createElement('btn');
    document.getElementById('loginform').append(btn);
    btn.innerHTML="Log in";
    btn.classList= "btn";
    btn.id= "loginbtn"
    
    btn.onclick= function()
    {
        let email = document.getElementById('emailForm').value;
        let password = document.getElementById('passwordForm').value;
        listOfUsers.forEach((elem,index)=>
        {
            if (elem.EmailAdress===email)
                saveindex=index;

        })
        checkValidDeateils(email,password,saveindex);
    }


}

function checkValidDeateils(email,password,index)
{
    let flag;
    let login = document.querySelector('.loginwrap'); 

   if (listOfUsers[index].EmailAdress===email && listOfUsers[index].password ===password)
    flag=true;
    else
   flag =false;

    if(flag)
    {
    console.log(flag);
    login.style.display="none";
    clearLogInForm();
    }
    else
    {
    alert("Try Again")
    console.log(flag)
    }
}

function closeLoginPop()
{
    document.querySelector('.loginwrap').style.display= "none";
    clearLogInForm();

}

function clearLogInForm()
{

    document.getElementById('emailForm').valu="";
    document.getElementById('passwordForm').value="";
    document.getElementById('loginbtn').remove();

}

function isValidContact(number)
{
    if (isNaN(number) || number.length !=10)
     return false;
    return true;
}

function uniqContact(number)
{
    let flag=true;
    contactList.forEach((elem)=>
    {
        if (number===elem.phonenumber)
        {
            console.log("right");
            flag= false;
        }
    });
    return flag;
}

function validNumberReturnErrorMessage(number)
{
    if (!uniqContact(number))
        alert("Contact is elready exist");
    else if (!isValidContact(number))
        alert ("Number is Not Valid");
}

console.log(uniqContact("0509939020"));


function registerUser()
{

let login = document.querySelector('.registerwrap'); 
    login.style.display="block"; 

    let btn = document.createElement('btn');
    document.getElementById('regform').append(btn);
    btn.innerHTML="Register";
    btn.classList= "btn";
    btn.id= "Registerinbtn";

    btn.onclick= function()
    {
        let email = document.getElementById('regMail').value;
        let password = document.getElementById('regPass').value;
        addNewUserToDataBase(email,password);
    }
} 

function addNewUserToDataBase(EmailAdress,password)
{
    if (checkValidPassWord(password))
    {
    listOfUsers.push({EmailAdress,password});
     clearRegisterForm();
     alert("successful ! acount has been created.")
    }
    else
    alert("password must contain at least 6 characters and contain at least one letter")
}


function clearRegisterForm()
{

    document.getElementById('regMail').value="";
    document.getElementById('regPass').value="";
    document.getElementById('Registerinbtn').remove();
    document.querySelector('.registerwrap').style.display= "none";


}

function closeRegisterPop()
{
    clearRegisterForm();
}

function checkValidPassWord(password)
{
    if (password.length<6 && (!isNaN(password)))
        return false;

    else if (password.length<6)
        return false;

    else if (!isNaN(password))
        return false;

    return true;


}
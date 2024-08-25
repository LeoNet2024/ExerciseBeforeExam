"use strict";

let contactList=
[
    {
        "name":"Eyal Shani",
        "address": "Aba Hoshi Haifa",
        "phonenumber": "050123453"
    },
    {
        "name":"Assaf granit",
        "address": "Tel Aviv Hayarkon",
        "phonenumber": "050999999"

    },
    {
        "name":"Tomer Tomas",
        "address": "Tel aviv Yad Labanim",
        "phonenumber": "050888888"

    },
    {
        "name":"Haim Cohen",
        "address": "Tel Aviv Gordon",
        "phonenumber": "043344142"
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
    alert("This action will remove the contact, Are you sure?")
    restartMain()
    contactList.splice(index,1);
    renderContacts();
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
        saveChangeEdit(index);
    }

}

function saveChangeEdit(index)
{
    let headline = document.getElementById('headline');
    headline.innerHTML= "edit contact";
    console.log("only when i close");
    let name = document.getElementById('editname').value 
    let address = document.getElementById('editaddress').value 
    let phone = document.getElementById('editphone').value 

    contactList[index].name = name;
    contactList[index].address = address;
    contactList[index].phonenumber = phone;
    
    closeEditPop();
    renderContacts();


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
    alert("This action will remove all  contacts, Are you sure?")
    restartMain();
    contactList = [];
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
        saveTheNewContact();
    }

}

function saveTheNewContact()
{
    let name = document.getElementById('editname').value 
    let address=document.getElementById('editaddress').value 
    let phonenumber= document.getElementById('editphone').value 

    console.log(phonenumber)

    contactList.push
    (
        {
            name,
            address,
            phonenumber
        }
    );

    console.log(contactList);

    closeEditPop();
    renderContacts();
    clearFormFileds();
    

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
    console.log("check")
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
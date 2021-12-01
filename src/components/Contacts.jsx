import React from "react";
import Contact from "./Contact";
import { useState } from 'react';

const contacts = [
    {
      firstName: "Luke",
      lastName: "Skywalker",
      phone: "+380956319521",
      gender: "male"
  }, {
      firstName: "C-3PO",
      lastName: "",
      phone: "+380931460123"
  }, {
      firstName: "R2-D2",
      lastName: "",
      phone: "+380666666666"
  }, {
      firstName: "Darth",
      lastName: "Vader",
      phone: "+380504691254",
      gender: "male"
  }, {
      firstName: "Leia",
      lastName: "Organa",
      phone: "+380739432123",
      gender: "female"
  }, {
      firstName: "Owen",
      lastName: "Lars",
      phone: "+380956319521",
      gender: "male"
  },{
      firstName: "Beru Whitesun",
      lastName: "lars",
      phone: "+380956319521",
      gender: "male"
  }, {
      firstName: "R5-D4",
      lastName: "",
      phone: "+380931460123"
  }, {
      firstName: "Biggs",
      lastName: "Darklighter",
      phone: "+380666666666"
  }, {
      firstName: "Obi-Wan",
      lastName: "Kenobi",
      phone: "+380504691254",
      gender: "male"
  }
];

const Contacts = () => {
    const [searchItem, setSearchItem] = useState("");

    function handleSearchChange(event){
        setSearchItem(event.target.value);
    }

    return (
      <div className="contacts_container">
        <input className="contacts_search" type="search" placeholder="SEARCH" onChange={handleSearchChange}/>
      { contacts.filter((contacts) => {
          if(contacts.lastName.toLowerCase().includes(searchItem.toLowerCase())){
            return contacts;
          }
          if(contacts.firstName.toLowerCase().includes(searchItem.toLowerCase())){
            return contacts;
          }
          if(contacts.phone.includes(searchItem)){
            return contacts;
          }}).map((contacts) => <Contact contact={contacts}/>) }
      </div>
    );
  }
  export default Contacts;
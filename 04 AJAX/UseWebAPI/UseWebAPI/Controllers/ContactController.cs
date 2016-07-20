﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace UseWebAPI.Controllers
{
    public class ContactController : ApiController
    {
        public Contact[] Get()
        {
            return new Contact[]
                {
                    new Contact() {ID=1, Name="Ori" },
                    new Contact() {ID=2, Name="Roni" },
                };
        }

        public void Post(Contact contact)
        {
        }

        //[HttpPost]
        //public void DeleteAllContacts()
        //{
        //}
    }

    public class Contact
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}

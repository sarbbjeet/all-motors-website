const inquery_template = (obj) => {
  return `
   <div>
   <p>Hi,</p>
   <p>${obj?.message || ""}</p>
   <hr>
   <p>Best regards, </p>
   <p>Name ${obj?.name || ""}</p>
   <p>Email ${obj?.email || ""}</p>
   <p>Contact  <a href="tel:">${obj?.phone || ""} </a></p>
   </div>
   `;
};

export { inquery_template };

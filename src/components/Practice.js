import React from "react";
import "../components/Practice.css";
function Practice() {
  return (
    <div className="container">
      <h1>Praktik</h1>
      <hr />
      <div className="practice">
        <article>
          <h3>Codemill</h3>
          <p>
            {" "}
            Jag har använt mig av React native för att bygga appar men också
            jobbat med Django och django-restframework (python framework). Har
            byggt backend med django och django-rest-framework, byggde olika
            apier och använt sqlite och postgress.
          </p>
        </article>

        <article>
          <h3>Xlent</h3>
          <p>
            {" "}
            Jobbat mycket med webbprogrammering båda frontend och backend
            delerna, har byggt några projekt med angular 2,testat asp.net
            (entity framework code first), har byggt webb apier men också använt
            rest api.
          </p>
        </article>
        <article>
          <h3>HI5</h3>
          <p>
            {" "}
            Fick testa olika arbetsuppgifter inom IT, hur man installerar t.ex.
            Windows servrar, vmware, klientdatorer, sätta upp DNS, DHCP, skapa
            användare och ge de olika rättigheter, återställa lösenord, Group
            Policy, mapputdelning, användare, grupper, SQL servrar,
            dokumentation,
          </p>
        </article>
        <article>
          <h3>Ricoh IT Service</h3>
          <p>
            {" "}
            Hade haft följande arbetsuppgifter t.ex. skruva skrivare,
            installationer av nya skrivare, sätt upp högtalare och projektorer
            på väggarna, bytte datorskärmar o.s.v.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Practice;

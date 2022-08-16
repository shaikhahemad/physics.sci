import Link from "next/link";
import Image from 'next/image'

const Footer = ()=> {
  return(
    <>
    <style jsx>
    {`
    footer{ 
         background:#04033c;
         color:black;
         display:flex;
         color:white;
         align-items:center;
         justify-content:center;
         text-align:center;
         position:sticky;
         }
.dp{
    padding:0px;
    align-items:center;
    justify-content:center;
}
    `}
    </style>
    
    <footer className="footer bg-black text-white text-center">
     <Image className="dp" src="/dp.png" alt="DP" height="80"width="80"/>
    
      <center>
       
        <div className="font-bold p-2">
          All Copyright Reserved By
            <p>
            Created By - Ahemad Shaikh , BSc First Year ,<br/>DSM Senior College Parbhani
            </p>
        </div>
      </center>
    </footer>
    </>
  );
};

export default Footer;
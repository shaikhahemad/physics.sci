import Script from 'next/script'
// import * as jquery from 'jquery';
const $ = require('jquery');

const jQuery = ()=> {
    $('p').click(function(){
      $('p').hide();
      console.log("hide");
      });
  return(
    <>
    <p>
Hello jQuery
    </p>


    <Script id="show-banner" strategy="lazyOnload">
  {`
    



      `}
    </Script> < />
  );
};

export default jQuery;
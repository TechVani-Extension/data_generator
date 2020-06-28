var current_url = window.location.toString();
var current_site;
var price;
var currentsite = document.domain;
var main_data = new Object();
var sites = ["Amazon","Flipkart","Croma"];
console.log(current_url);
tit = document.getElementsByTagName("title")[0].innerText;
for(site in sites){
    console.log(sites[site])
    if (tit.match(sites[site])){
        current_site = sites[site]
    }
}
if (currentsite =="www.amazon.in"){
    var currentProductId = current_url.match(/[\/][B][0][A-Z0-9]+/gm)[0].replace("B", "").replace("/","");//[\/][B]+[^a-zA-Z][a-zA-Z0-9]+
    console.log(currentProductId);
    amazon();
    var our_pid = prompt('Type here');
    main_data["amazon"]=[our_pid,currentProductId,current_url,price]
    console.log(main_data);
}
else if (currentsite =="www.croma.com"){
    var currentProductId = current_url.match(/p[^a-zA-Z][a-zA-Z0-9]+/gm)[0];
    currentProductId = currentProductId.replace("p/","");
    console.log(currentProductId);
    croma();
    var our_pid = prompt('Type here');
    main_data["croma"]=[our_pid,currentProductId,current_url,price];
    console.log(main_data);
}
else if (currentsite =="www.flipkart.com"){
    var currentProductId = current_url.match(/[\?]pid=[a-zA-Z0-9]+/gm)[0]; //[?]pid=[a-zA-Z0-9]+
    currentProductId = currentProductId.replace("?pid=","").replace("&","");
    console.log(currentProductId);
    flipkart();
    var our_pid = prompt('Type here');
    main_data["flipkart"]=[our_pid,currentProductId,current_url ,price]
    console.log(main_data);
}
console.log("Sending...!");
chrome.runtime.sendMessage(main_data);
console.log("message sent!");
function amazon(html1,link){
    try{
        
        price = document.getElementById("priceblock_ourprice").innerText.replace("₹","").replace(" ","");
        console.log(price);

    }    
    catch(err){
            console.log("error in amazon as " +err);
            //alert("error in Amazon_regex2_2 as " +err)
           // console.log("recurring...");
            //amazon()
        }
}
function flipkart(html1,link){
    try{
        price = document.getElementsByClassName("_1vC4OE _3qQ9m1")[0].innerText.replace("₹","").replace(" ","");
        console.log(price);
    
    }    
    catch(err){
            console.log("error in flipkart as " +err);
            //alert("error in Amazon_regex2_2 as " +err)
            //console.log("recurring...");
            //flipakrt();
        }
}
function croma(html1,link){
    try{
        price = document.getElementsByClassName("pdpPrice")[0].innerText.replace("₹","").replace(" ","");
        console.log(price);
   }    
    catch(err){
            console.log("error in croma as " +err);
            //alert("error in Amazon_regex2_2 as " +err)
            //console.log("recurring...");
            //croma();
        }
}
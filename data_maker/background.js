alert("background script loaded!!!")

   var amazon={

    }
    var croma={

    }
   var flipkart={

    }

chrome.runtime.onMessage.addListener(receivedMessage);
function receivedMessage(message,sender,response){
    console.log(message,sender.tab.id);
    for( site in message){
        console.log(site);
        if (site == "amazon"){
            amazon[message[site][0]] = [message[site][1],message[site][2],message[site][3]]
            if(!flipkart[message[site][0]]){
                flipkart[message[site][0]]= ["","",""];
            }
            if(!croma[message[site][0]]){
                croma[message[site][0]]=["","",""];
            }
        }
        if (site == "flipkart"){
            flipkart[message[site][0]] = [message[site][1],message[site][2],message[site][3]]
            if(!amazon[message[site][0]]){
                flipkart[message[site][0]]= ["","",""];
            }
            if(!croma[message[site][0]]){
                croma[message[site][0]]=["","",""];
            }
        }
        if (site == "croma"){
            croma[message[site][0]] = [message[site][1],message[site][2],message[site][3]]
            if(!flipkart[message[site][0]]){
                flipkart[message[site][0]]= ["","",""];
            }
            if(!amazon[message[site][0]]){
                croma[message[site][0]]=["","",""];
            }
        }
    }
    console.log("amazon ",amazon,"flipkart ",flipkart,"croma ",croma);
}
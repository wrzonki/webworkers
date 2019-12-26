self.addEventListener('message', (event)=>{
   
    let data = event.data;
    switch(data){
        case 'Wait 5 sek':
            setTimeout(function () {
                self.postMessage('Closing web worker');
            }, 5000)
            break;
        default:
            self.postMessage('Closing web worker');
            self.close();
    }
    
})
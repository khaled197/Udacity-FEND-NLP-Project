function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let link = document.getElementById('link').value;

    if(!(Client.checkForUrl(link))){
        alert('Please Enter a valid Url')
        return "";
    }

    analyze({"link": link});
    }

const analyze = async (data = {}) => {

const res1 = await fetch('/test', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data)
});

try{
    const d = await res1.json();
    document.getElementById('results').innerHTML = d;
    return d;
}catch(error){
    console.log('Error analyzing data');
}}



// const updateUI = async () =>{

//     const response = await fetch('/getData');
//
//     try{
//         data = response.json();
//         console.log(data);
//         document.getElementById('results').innerHTML = data;
//     }catch(e){
//         console.log('Error getting the analyzed data');
//     }
// }


export { handleSubmit, analyze }

console.log("This is Cv Scrnner");
//array of objects which conatins information about the candidates
const data = [

    {
        name: 'Rohan das',
        age: 18,
        city: 'kolkatta',
        language: 'pyhton',
        framework: 'django',
        image: 'http://randomuser.me/api/portraits/men/76.jpg'
    },

    {
        name: 'Shubhm sharma',
        age: 28,
        city: 'banglor',
        language: 'js',
        framework: 'angular',
        image: 'http://randomuser.me/api/portraits/men/77.jpg'
    },

    {
        name: 'Ayushi',
        age: 22,
        city: 'kolkatta',
        language: 'c++',
        framework: 'flask',
        image: 'http://randomuser.me/api/portraits/women/81.jpg'
    },

    {
        name: 'Riddhi',
        age: 23,
        city: 'vadodra',
        language: 'Go',
        framework: 'Go Frame work',
        image: 'http://randomuser.me/api/portraits/women/79.jpg'
    }

]

//CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);
nextCV();
//button lis.. for netx button
const next = document.getElementById('nextId');
next.addEventListener('click', nextCV);



function nextCV() {
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate != undefined){
    image.innerHTML = `<img src='${CurrentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
   
    <li class="list-group-item"><b>Name: </b>${CurrentCandidate.name}</li>
    <li class="list-group-item"><b>Age: </b>${CurrentCandidate.age}</li>
    <li class="list-group-item"><b>City: </b>${CurrentCandidate.city}</li>
    <li class="list-group-item"><b>Language: </b>${CurrentCandidate.language}</li>
    <li class="list-group-item"><b>Framework: </b>${CurrentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert('End of the applications.');
        window.location.reload();
    }
}
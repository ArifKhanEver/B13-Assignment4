let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const buttonAll = document.getElementById('buttonAll');
const buttonInterview = document.getElementById('buttonInterview');
const buttonRejected = document.getElementById('buttonRejected');

const allJobs = document.getElementById('allJobs');
const interviewJobs = document.getElementById('interviewJobs');
const rejectedJobs = document.getElementById('rejectedJobs');

const noJobsAll = document.getElementById('noJobsAll');
const noJobsInterview = document.getElementById('noJobsInterview');
const noJobsRejected = document.getElementById('noJobsRejected');


// Total jobs count
const cards = document.querySelector('.allJobsCards').children;
const interviewJobsCards = document.querySelector('.interviewJobsCards').children;
const rejectedJobsCards = document.querySelector('.rejectedJobsCards').children;
console.log(cards)

document.getElementById('subTotalJobsCount').innerText = cards.length;
totalCount.innerText = cards.length;
interviewCount.innerText = interviewJobsCards.length;
rejectedCount.innerText = rejectedJobsCards.length;


if(cards.length == 0) {
    noJobsAll.classList.remove('hidden');
}else {
    noJobsAll.classList.add('hidden');
}

if(interviewJobsCards.length == 0) {
    noJobsInterview.classList.remove('hidden');
}else {
    noJobsInterview.classList.add('hidden');
}

if(rejectedJobsCards.length == 0) {
    noJobsRejected.classList.remove('hidden');
}else {
    noJobsRejected.classList.add('hidden');
}


// Toggle buttons Implementation
buttonAll.addEventListener('click', function(){
    buttonAll.classList.add('text-white', 'bg-[#3B82F6]');
    buttonAll.classList.remove('text-[#64748B]', 'bg-white');
    buttonInterview.classList.add('text-[#64748B]', 'bg-white');
    buttonInterview.classList.remove('text-white', 'bg-[#3B82F6]');
    buttonRejected.classList.add('text-[#64748B]', 'bg-white');
    buttonRejected.classList.remove('text-white', 'bg-[#3B82F6]');

    document.getElementById('subTotalJobsCount').innerText = cards.length;

    allJobs.classList.remove('hidden');
    interviewJobs.classList.add('hidden'); 
    rejectedJobs.classList.add('hidden'); 
});

buttonInterview.addEventListener('click', function(){
    buttonInterview.classList.remove('text-[#64748B]', 'bg-white');
    buttonInterview.classList.add('text-white', 'bg-[#3B82F6]');
    buttonAll.classList.add('text-[#64748B]', 'bg-white');
    buttonAll.classList.remove('text-white', 'bg-[#3B82F6]');
    buttonRejected.classList.add('text-[#64748B]', 'bg-white');
    buttonRejected.classList.remove('text-white', 'bg-[#3B82F6]');

    document.getElementById('subTotalJobsCount').innerText = interviewJobsCards.length + " of " + cards.length;
    
    allJobs.classList.add('hidden');
    interviewJobs.classList.remove('hidden'); 
    rejectedJobs.classList.add('hidden'); 
});

buttonRejected.addEventListener('click', function(){
    buttonRejected.classList.remove('text-[#64748B]', 'bg-white');
    buttonRejected.classList.add('text-white', 'bg-[#3B82F6]');
    buttonAll.classList.add('text-[#64748B]', 'bg-white');
    buttonAll.classList.remove('text-white', 'bg-[#3B82F6]');
    buttonInterview.classList.add('text-[#64748B]', 'bg-white');
    buttonInterview.classList.remove('text-white', 'bg-[#3B82F6]');

    document.getElementById('subTotalJobsCount').innerText = rejectedJobsCards.length + " of " + cards.length;

    allJobs.classList.add('hidden');
    interviewJobs.classList.add('hidden'); 
    rejectedJobs.classList.remove('hidden'); 
});



// delete button implementation
const deleteBtn = document.querySelectorAll('.delete');
console.log(deleteBtn)

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function(event) {
        event.target.parentNode.parentNode.parentNode.remove();

        updateTotalCount();
    })
}

function updateTotalCount() {
    document.getElementById('subTotalJobsCount').innerText = cards.length;
    totalCount.innerText = cards.length;

    if(cards.length == 0) {
        noJobsAll.classList.remove('hidden');
    }else {
        noJobsAll.classList.add('hidden');
    }


    if(interviewJobsCards.length == 0) {
        noJobsInterview.classList.remove('hidden');
    }else {
        noJobsInterview.classList.add('hidden');
    }


    if(rejectedJobsCards.length == 0) {
        noJobsRejected.classList.remove('hidden');
    }else {
        noJobsRejected.classList.add('hidden');
    }

}



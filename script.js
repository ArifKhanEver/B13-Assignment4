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
const cards = document.querySelector('#allJobsCards').children;
const interviewJobsCards = document.querySelector('#interviewJobsCards').children;
const rejectedJobsCards = document.querySelector('#rejectedJobsCards').children;
console.log(cards)

document.getElementById('subTotalJobsCount').innerText = cards.length;
totalCount.innerText = cards.length;


// Not Job Section toggle for only All jobs
if(cards.length == 0) {
    noJobsAll.classList.remove('hidden');
}else {
    noJobsAll.classList.add('hidden');
}

// if(interviewJobsCards.length == 0) {
//     noJobsInterview.classList.remove('hidden');
// }else {
//     noJobsInterview.classList.add('hidden');
// }

// if(rejectedJobsCards.length == 0) {
//     noJobsRejected.classList.remove('hidden');
// }else {
//     noJobsRejected.classList.add('hidden');
// }


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



// Playing with Cards

let interviewList = [];
let rejectedList = [];

const mainContainer = document.querySelector('main');

mainContainer.addEventListener('click',function(event) {


    // delete button implementation
    const deleteBtn = document.querySelectorAll('.delete');
    
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', function(event) {
            
            const titleToRemove =event.target.parentNode.parentNode.parentNode.querySelector('.jobTitle').innerText;
            interviewList = interviewList.filter(job => job.jobTitle !== titleToRemove);
            rejectedList = rejectedList.filter(job => job.jobTitle !== titleToRemove);
            
            event.target.parentNode.parentNode.parentNode.remove();

            interviewCount.innerText = interviewList.length;
            rejectedCount.innerText = rejectedList.length;

            displayNoJobs();
        })
    }

    function displayNoJobs() {
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


    // Objects Listening

    const isInterview = event.target.classList.contains('interviewButton');
    const isRejected = event.target.classList.contains('rejectedButton');
    
    
    if(isInterview || isRejected){
        const card = event.target.parentNode.parentNode;
        const jobStatus = card.querySelector('.jobStatus');
        const currentJobTitle = card.querySelector('.jobTitle').innerText;
        
        const jobData = {
            jobTitle: currentJobTitle,
            jobShortDsc: card.querySelector('.jobShortDsc').innerText,
            jobSalary: card.querySelector('.jobSalary').innerText,
            jobStatus: card.querySelector('.jobStatus').innerText,
            jobDescription: card.querySelector('.jobDescription').innerText
        };
        
        
        if(isInterview) {
            rejectedList = rejectedList.filter(job => job.jobTitle !== currentJobTitle);

            let foundInInterview = false;

            for(let i = 0; i < interviewList.length; i++) {
                if (interviewList[i].jobTitle === currentJobTitle) {
                    foundInInterview = true;
                    break;
                }
            }

            if(foundInInterview === false) {
                interviewList.push(jobData);
                jobStatus.innerText = "Interview";

            }
            
            console.log(interviewList);
        }
        else if (isRejected) {
            interviewList = interviewList.filter(job => job.jobTitle !== currentJobTitle);

            let foundInRejected = false;

            for(let i = 0; i < rejectedList.length; i++) {
                if (rejectedList[i].jobTitle === currentJobTitle) {
                    foundInRejected = true;
                    break;
                }
            }

            if(foundInRejected === false) {
                rejectedList.push(jobData);
                jobStatus.innerText = "rejected";
            }


            console.log(rejectedList);
        }
        
        renderInterviewed();
        renderRejected();

        // Jobs Counts 
        interviewCount.innerText = interviewList.length;
        rejectedCount.innerText = rejectedList.length;

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

});



function renderInterviewed() {
    let div = document.getElementById('interviewJobsCards');
    div.innerHTML = "";

    for (let interview of interviewList) {

        // let div = document.createElement('div');

        div.innerHTML += `
         <div class="card flex justify-between p-6 bg-white mt-4 rounded-[8px]">
                <div class="mainContent flex flex-col">
                    <div>
                        <h4 class="jobTitle text-[18px] text-[#002C5C] font-semibold">${interview.jobTitle}</h4>
                        <p class="jobShortDsc text-[#64748B]">${interview.jobShortDsc}</p>
                    </div>

                    <h6 class="jobSalary my-[20px] text-[#64748B] text-[14px]">${interview.jobSalary}</h6>

                    <div class="mb-2">
                        <button class="jobStatus uppercase text-left px-3 py-2 bg-[#EEF4FF] rounded-[4px]">Interview</button>
                    </div>

                    <p class="jobDescription text-[14px] text-[#323B49] mb-5">
                        ${interview.jobDescription}
                    </p>

                    <div class="buttons">
                        <button class="interviewButton uppercase text-[14px] font-semibold px-[12px] py-[8px] border border-2 rounded-[4px] border-[#10B981] text-[#10B981] mr-2">Interview</button>
                        <button class="rejectedButton uppercase text-[14px] font-semibold px-[12px] py-[8px] border border-2 rounded-[4px] border-[#EF4444] text-[#EF4444]">Rejected</button>
                    </div>

                </div>

                <div class="delete max-[650px]:w-[65px]">
                    <button><img src="./delete.png" alt="delete icon"></button>
                </div>
            </div>
        `;

    }
};



function renderRejected() {
    let div1 = document.getElementById('rejectedJobsCards');
    div1.innerHTML = "";

    for (let rejected of rejectedList) {

        // let div = document.createElement('div');

        div1.innerHTML += `
            <div class="card flex justify-between p-6 bg-white mt-4 rounded-[8px]">
                <div class="mainContent flex flex-col">
                    <div>
                        <h4 class="jobTitle text-[18px] text-[#002C5C] font-semibold">${rejected.jobTitle}</h4>
                        <p class="jobShortDsc text-[#64748B]">${rejected.jobShortDsc}</p>
                    </div>

                    <h6 class="jobSalary my-[20px] text-[#64748B] text-[14px]">${rejected.jobSalary}</h6>

                    <div class="mb-2">
                        <button class="jobStatus uppercase text-left px-3 py-2 bg-[#EEF4FF] rounded-[4px]">Rejected</button>
                    </div>

                    <p class="jobDescription text-[14px] text-[#323B49] mb-5">
                        ${rejected.jobDescription}
                    </p>

                    <div class="buttons">
                        <button class="interviewButton uppercase text-[14px] font-semibold px-[12px] py-[8px] border border-2 rounded-[4px] border-[#10B981] text-[#10B981] mr-2">Interview</button>
                        <button class="rejectedButton uppercase text-[14px] font-semibold px-[12px] py-[8px] border border-2 rounded-[4px] border-[#EF4444] text-[#EF4444]">Rejected</button>
                    </div>

                </div>

                <div class="delete max-[650px]:w-[65px]">
                    <button><img src="./delete.png" alt="delete icon"></button>
                </div>
            </div>
        `;

    }
}


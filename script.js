const buttonAll = document.getElementById('buttonAll');
const buttonInterview = document.getElementById('buttonInterview');
const buttonRejected = document.getElementById('buttonRejected');
const allJobs = document.getElementById('allJobs');
const interviewJobs = document.getElementById('interviewJobs');
const rejectedJobs = document.getElementById('rejectedJobs');
const noJobsAll = document.getElementById('noJobsAll');
const noJobsInterview = document.getElementById('noJobsInterview');
const noJobsRejected = document.getElementById('noJobsRejected');


buttonAll.addEventListener('click', function(){
    buttonAll.classList.add('text-white', 'bg-[#3B82F6]');
    buttonAll.classList.remove('text-[#64748B]', 'bg-white');
    buttonInterview.classList.add('text-[#64748B]', 'bg-white');
    buttonInterview.classList.remove('text-white', 'bg-[#3B82F6]');
    buttonRejected.classList.add('text-[#64748B]', 'bg-white');
    buttonRejected.classList.remove('text-white', 'bg-[#3B82F6]');

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

    allJobs.classList.add('hidden');
    interviewJobs.classList.add('hidden'); 
    rejectedJobs.classList.remove('hidden'); 
});
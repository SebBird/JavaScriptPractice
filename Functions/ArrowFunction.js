const square = function (number) {
  return number * number;
};

//As an arrow function
const square = (number) => number * number;

//Another example
const jobs = [
    {id: 1, isActive = true},
    {id: 2, isActive = true},
    {id: 3, isActive = false}
]

const activeJobs = jobs.filter(job => job.isActive);
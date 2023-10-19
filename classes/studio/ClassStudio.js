//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore (newScore){
        this.scores.push(newScore);
    }

    average(){
        let sum = 0;
        for(let i = 0; i < this.scores.length; i++){
            sum += this.score[i];
        }
        const avg = sum / this.scores.length;
        return Math.round(avg * 10) / 10;
    }

    status(){
        let candidateAverage = this.average();
        if (candidateAverage >= 90){
            return "Accepted";
        } else if (candidateAverage >= 80 && candidateAverage <= 89){
            return "Reserve";
        } else if (candidateAverage >= 70 && candidateAverage <= 79){
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const message = `${bubbaBear.name} earned an average test score of ${bubbaBear.average}% and has a status of ${bubbaBear.status()}.`
// bubbaBear.addScore(83);
// console.log(bubbaBear.scores);

const merryMaitese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

let testsTilReserve = 0;
let testsTilAccepted = 0;

while (gladGator.status() !== "Accepted"){
    gladGator.addScore(100);
    if (gladGator.status() !== "Reserve"){
        testsTilReserve++;
    }
    testsTilAccepted++;
}

// console.log(bubbaBear);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
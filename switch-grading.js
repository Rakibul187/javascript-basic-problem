// ======grading with function & switch==============
function myGrading(score) {
    var gscore;

    switch (true) {
        case (score <= 100 && score >= 80):
            gscore = 'A+';
            break;
        case (score <= 79 && score >= 70):
            gscore = 'A';
            break;
        case (score <= 69 && score >= 60):
            gscore = 'A-';
            break;
        case (score <= 59 && score >= 50):
            gscore = 'B';
            break;

        case (score > 49 && score < 40):
            gscore = 'C';
            break;

        case (score <= 39 && score >= 33):
            gscore += 'D';
            break;

        case (score <= 32 && score >= 0):
            gscore += 'Failed';
            break;

        default:
            return 'INVALID SCORE';
    }

    return gscore;
}

var output = myGrading(91);
console.log(output);


// ==========grading without function===========

// const grade = 'l';

// switch (grade) {
//     case 'A+':
//         console.log('weldone keep it up');
//         break;
//     case 'A':
//         console.log('good keep it up');
//         break;
//     case 'B':
//         console.log('not bad keep it up');
//         break;
//     case 'F':
//         console.log('failed');
//         break;
//     default: console.log('enter a valid number')
// }



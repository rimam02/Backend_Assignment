
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((sum, mark) => sum + mark, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }
        }, 2000);
    });
}


function technicalInterviewCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((sum, mark) => sum + mark, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Technical Interview.");
            }
        }, 2000);
    });
}


function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const finalAverage =
                (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }
        }, 2000);
    });
}


codingScoreCheck([80, 75, 90], 70)
    .then((codingAverage) => {
        console.log("Coding Assessment cleared!");
        console.log("Coding Average:", codingAverage);

        return technicalInterviewCheck([78, 82, 88], 75)
            .then((technicalAverage) => {
                console.log("Technical Interview cleared!");
                console.log("Technical Average:", technicalAverage);

                return finalSelectionCheck(
                    codingAverage,
                    technicalAverage,
                    75
                );
            });
    })
    .then((finalAverage) => {
        console.log("Final Selection cleared!");
        console.log("Final Average:", finalAverage);
        console.log("Congratulations! You have been selected.");
    })
    .catch((error) => {
        console.log(error);
    });



codingScoreCheck([40, 45, 50], 60)
    .then((average) => {
        console.log("Coding Assessment cleared!");
        console.log("Coding Average:", average);
    })
    .catch((error) => {
        console.log("Failure Test:", error);
    });

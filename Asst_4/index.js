const fs = require("fs");

const studentData = `Name: Rima
Course: Full Stack Development 
Technology: Node.js`;

fs.writeFile("student.txt", studentData, (err) => {
    if (err) {
        console.error("Error creating file:", err);
        return;
    }

    console.log("File created successfully");

    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        console.log("Student Information:");
        console.log(data);

const additionalData = `
Experience: 1 Year
City: Kolkata`;

        fs.appendFile("student.txt", additionalData, (err) => {
            if (err) {
                console.error("Error updating file:", err);
                return;
            }

            console.log("Data updated successfully");

            fs.rename("student.txt", "studentDetails.txt", (err) => {
                if (err) {
                    console.error("Error renaming file:", err);
                    return;
                }

                console.log("File renamed successfully");

                fs.unlink("studentDetails.txt", (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully");
                });
            });
        });
    });
});

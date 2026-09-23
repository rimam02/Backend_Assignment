# Node.js File System Assignment

## Assignment Explanation

This assignment demonstrates basic file handling operations in Node.js using the built-in `fs` module.

The following operations are performed:

1. **File Creation** – `fs.writeFile()` is used to create `student.txt` and store student information.
2. **File Reading** – `fs.readFile()` is used to read and display the contents of the file.
3. **File Updating** – `fs.appendFile()` is used to add additional student information without removing existing data.
4. **File Renaming** – `fs.rename()` is used to rename `student.txt` to `studentDetails.txt`.
5. **File Deletion** – `fs.unlink()` is used to delete the file after all operations are completed.

Error handling is implemented for every file operation.

## Student Information

```text
Name: Rima 
Course: Full Stack Development
Technology: Node.js
Experience: 1 Year
City: Kolkata
```

## How to Run the Program

### Step 1: Install Node.js

Make sure Node.js is installed on your computer.

### Step 2: Open the Project Folder

Open the project folder in VS Code or any terminal.

### Step 3: Run the Program

Use the following command:

```bash
node index.js
```

Alternatively, use:

```bash
npm start
```

## Expected Output

```text
File created successfully

Student Information:
Name: Rima
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed successfully
File deleted successfully
```

## Output Screenshots

Add screenshots of the terminal output here.

The screenshot should show:

* File created successfully
* Student information
* Data updated successfully
* File renamed successfully
* File deleted successfully

## Technologies Used

* Node.js
* JavaScript
* File System (`fs`) module



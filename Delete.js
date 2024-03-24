// Add the Credentials variable at the beginning of the script
const Credentials = document.getElementById('Credentials');

function getCredentials() {
    const username = prompt('Enter your username:');
    const passcode = prompt('Enter your passcode:');

    if (username && passcode) {
        Credentials.innerHTML = (`Username: ${username}\nPasscode: ${passcode}`);
        document.getElementById('deleteButton').style.display = 'block';
    } else  {
        alert('Please enter both a username and passcode!');
    };
}

function deleteStudent() {
    const studentList = document.getElementById('studentList'); // Get the reference to the studentList element
    const students = studentList.getElementsByTagName('li');
    const index = prompt('Enter the index of the student you want to delete:');

    if (index >= 0 && index < students.length) {
        studentList.removeChild(students[index]);
    } else {
        alert('Invalid index');
    }
}
const Credentials = document.getElementById('Credentials');
function getCredentials() {
    const username = prompt('Enter your username:');
    const passcode = prompt('Enter your passcode:');

    if (username && passcode) {
        Credentials.innerHTML = (`Username: ${username}\nPasscode: ${passcode}`);
        document.getElementById('deleteButton').style.display = 'block';
    }
}

function deleteStudent() {
    const students = studentList.getElementsByTagName('li');
    const index = prompt('Enter the index of the student you want to delete:');

    if (index >= 0 && index < students.length) {
        studentList.removeChild(students[index]);
    } else {
        alert('Invalid index');
    }
};
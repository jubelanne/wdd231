// Array of courses
const courses = [
    { name: "CSE 110", type: "cse", completed: false },
    { name: "WDD 130", type: "wdd", completed: false },
    { name: "CSE 111", type: "cse", completed: false },
    { name: "CSE 210", type: "cse", completed: false },
    { name: "WDD 131", type: "wdd", completed: false },
    { name: "WDD 231", type: "wdd", completed: false }
];

// Function to filter and display courses
function filterCourses(type) {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";

    const filteredCourses = type === "all" ? courses : courses.filter(course => course.type === type);
    const courseItems = filteredCourses.map(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-item");

        // Assign the appropriate class for course completion
        if (course.completed) {
            courseItem.classList.add("completed");
        }

        // Create a button for each course and apply appropriate styling based on course type
        const courseButton = document.createElement("button");
        courseButton.textContent = course.name;

        // Apply green class for CSE 110, WDD 130, CSE 111, CSE 210
        if (course.name === "CSE 110" || course.name === "WDD 130" || course.name === "CSE 111" || course.name === "CSE 210") {
            courseButton.classList.add("green");
        } 
        // Apply grey class for WDD 231 and WDD 131
        else if (course.name === "WDD 231" || course.name === "WDD 131") {
            courseButton.classList.add("grey");
        }

        courseItem.appendChild(courseButton);
        return courseItem;
    });

    courseItems.forEach(item => courseList.appendChild(item));
}

// Display the current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display the last modified date dynamically
document.getElementById("lastModified").textContent += document.lastModified;

// Call the function to display all courses by default
filterCourses("all");

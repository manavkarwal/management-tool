//utils/LocalStorage.jsx
const employees = [ 
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstname": "Arjun", // Indian name added
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete project report",
                "taskDescription": "Prepare and submit the project report for review.",
                "taskDate": "2025-01-20",
                "category": "Documentation"
            },
          
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Ishita", // Indian name added
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Conduct training session",
                "taskDescription": "Host a training session for new hires.",
                "taskDate": "2025-01-21",
                "category": "Training"
            },
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Rahul", // Indian name added
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix website issues",
                "taskDescription": "Resolve bugs reported on the company website.",
                "taskDate": "2025-01-22",
                "category": "Development"
            },
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Neha", // Indian name added
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Customer follow-ups",
                "taskDescription": "Call and follow up with potential clients.",
                "taskDate": "2025-01-19",
                "category": "Customer Relations"
            },
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Ananya", // Indian name added
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop mobile app feature",
                "taskDescription": "Implement the user login feature in the mobile app.",
                "taskDate": "2025-01-23",
                "category": "App Development"
            },
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];



export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))

return({employees, admin})

}
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
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update client database",
                "taskDescription": "Ensure client information is updated and accurate.",
                "taskDate": "2025-01-19",
                "category": "Database Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team meeting preparation",
                "taskDescription": "Prepare agenda for the upcoming team meeting.",
                "taskDate": "2025-01-18",
                "category": "Meetings"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
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
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review performance reports",
                "taskDescription": "Evaluate the performance reports from last quarter.",
                "taskDate": "2025-01-19",
                "category": "Evaluation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Plan team outing",
                "taskDescription": "Organize an outing for team bonding.",
                "taskDate": "2025-01-15",
                "category": "Team Management"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
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
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design marketing material",
                "taskDescription": "Create new banners for the upcoming campaign.",
                "taskDate": "2025-01-20",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Submit expense report",
                "taskDescription": "File the expense report for December.",
                "taskDate": "2025-01-18",
                "category": "Finance"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
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
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare sales deck",
                "taskDescription": "Design a sales presentation for new leads.",
                "taskDate": "2025-01-18",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Organize inventory",
                "taskDescription": "Sort and catalog items in the storage.",
                "taskDate": "2025-01-17",
                "category": "Inventory Management"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
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
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Test API integration",
                "taskDescription": "Validate the API responses for accuracy.",
                "taskDate": "2025-01-20",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare tech documentation",
                "taskDescription": "Document the architecture of the new system.",
                "taskDate": "2025-01-16",
                "category": "Documentation"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
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
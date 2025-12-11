const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Prepare monthly performance report",
        date: "2025-12-01",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Attend client discussion",
        date: "2025-11-28",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug Fix",
        description: "Fix dashboard bugs",
        date: "2025-11-26",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Backup production database",
        date: "2025-12-02",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Testing",
        description: "Test user APIs",
        date: "2025-11-29",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "UI Fix",
        description: "Fix form alignment issues",
        date: "2025-11-25",
        category: "UI/UX",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content Upload",
        description: "Upload blog content",
        date: "2025-12-03",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Check",
        description: "Check SEO performance",
        date: "2025-11-30",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Campaign Setup",
        description: "Setup email campaign",
        date: "2025-11-27",
        category: "Marketing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Server Monitoring",
        description: "Monitor live server",
        date: "2025-12-01",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deployment",
        description: "Deploy new build",
        date: "2025-11-29",
        category: "Deployment",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Crash Fix",
        description: "Fix server crash issue",
        date: "2025-11-26",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikas",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "User Support",
        description: "Resolve user complaints",
        date: "2025-12-02",
        category: "Support",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Training",
        description: "Attend product training",
        date: "2025-11-30",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Documentation",
        description: "Update documentation",
        date: "2025-11-27",
        category: "Documentation",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employees,admin}
};

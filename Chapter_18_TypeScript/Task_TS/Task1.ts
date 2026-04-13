let bug: { id: number; title: string; severity: string; assignee: string } = {
    id: 101,
    title: "Login button unresponsive on mobile",
    severity: "Critical",
    assignee: "Dev"
};

function formatBug(b: { id: number; title: string; severity: string; assignee: string }): string {
    return "BUG-" + b.id + " [" + b.severity + "] " + b.title + " (Assigned: " + b.assignee + ")";
}

console.log(formatBug(bug));
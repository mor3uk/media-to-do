export default ({ tasks, isDeleted, filters, sortBy }) => {
    const visibleTasks = tasks.filter((task) => task.isDeleted === isDeleted)
        .filter((task) => {
            if (filters.statusFilter == 'all') {
                return true;
            }

            return task.status == filters.statusFilter;
        });

    if (sortBy == 'name') {
        console.log('dick');
        return visibleTasks.sort((a, b) => a.description > b.description ? 1 : -1);
    }

    return visibleTasks;
};
import React from 'react';

const GoalsTable = ({goals}) => {
    return (
        <div>
            <table className='w-full border-collapse text-left'>
                <thead className='bg-gray-100 '>
                    <tr>
                        <th className='p-3'>Goal Name</th>
                        <th className='p-3'>Category</th>
                        <th className='p-3'>Due Date</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {goals.map((goal,index) => (
                        <tr key={index} className='border-b hover:bg-gray-100'>
                            <td className='p-3 flex items-center gap-2'>
                                <span>{goal.nameIcon}</span>
                                {goal.name}
                            </td>
                            <td className='p-3 flex items-center gap-2'>
                                {goal.category}
                            </td>
                            <td className='p-3 flex items-center gap-2'>
                                <span>{goal.dueDateIcon}</span>{goal.dueDate}
                            </td>
                            <td className='p-3 flex items-center gap-2'>
                                {goal.status}
                            </td>
                            <td className='p-3 flex items-center gap-2'>
                                {goal.changeStatus}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GoalsTable;
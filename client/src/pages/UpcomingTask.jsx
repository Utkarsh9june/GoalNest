import React, { useEffect, useState } from 'react';
import { LuCalendarCheck } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { API_PATHS } from '../utils/apiPaths';
import api from '../utils/axios';

const UpcomingTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get(API_PATHS.GOAL.GETTASKS, {
          withCredentials: true,
        });
        setTasks(res.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
    fetchTasks();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isOverdue = (dateString) => {
    const today = new Date();
    const dueDate = new Date(dateString);
    return dueDate < today;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-600',
      medium: 'bg-yellow-100 text-yellow-600',
      low: 'bg-green-100 text-green-600'
    };
    return colors[priority?.toLowerCase()] || 'bg-gray-100 text-gray-600';
  };

  const getStatusColor = (status, timeline) => {
    if (isOverdue(timeline) && status?.toLowerCase() !== 'completed') {
      return 'bg-red-200 text-red-700';
    }
    const colors = {
      'completed': 'bg-green-100 text-green-600',
      'in-progress': 'bg-blue-100 text-blue-600',
      'pending': 'bg-gray-100 text-gray-600',
      'upcoming': 'bg-yellow-100 text-yellow-600'
    };
    return colors[status?.toLowerCase()] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border mt-10">
        <h3 className="text-2xl font-bold mb-4">Upcoming & Overdue Tasks</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Task</th>
              <th className="pb-2">Due Date</th>
              <th className="pb-2">Priority</th>
              <th className="pb-2">Category</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No tasks found
                </td>
              </tr>
            ) : (
              tasks.map((task) => {
                const overdue = isOverdue(task.timeline);
                return (
                  <tr key={task._id} className="border-b">
                    <td className="py-2">
                      <div className="flex items-center gap-1">
                        {overdue && task.status?.toLowerCase() !== 'completed' ? (
                          <AiOutlineExclamationCircle className="text-red-500" />
                        ) : (
                          <LuCalendarCheck />
                        )}
                        {task.title}
                      </div>
                    </td>
                    <td className={`py-2 ${overdue ? 'text-red-500 font-semibold' : ''}`}>
                      {formatDate(task.timeline)}
                    </td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                        {task.priority?.charAt(0).toUpperCase() + task.priority?.slice(1)}
                      </span>
                    </td>
                    <td className="py-2">
                      {task.tags && task.tags.length > 0 ? task.tags.join(', ') : 'N/A'}
                    </td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status, task.timeline)}`}>
                        {overdue && task.status?.toLowerCase() !== 'completed' ? 'Overdue' : task.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
  )
}

export default UpcomingTask
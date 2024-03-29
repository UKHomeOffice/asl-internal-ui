import React from 'react';
import { useSelector } from 'react-redux';
import { Snippet, Link, Number } from '@ukhomeoffice/asl-components';

const TaskCounts = ({ types }) => {
  const { tasks } = useSelector(state => state.static);

  return <table className="govuk-table">
    <thead>
      <tr>
        <th>Task type</th>
        <th className="numeric">Total</th>
      </tr>
    </thead>
    <tbody>
      {
        types.map(type => {
          return <tr key={type}>
            <td>
              {
                type.includes('expiry')
                  ? <Snippet>{ type }</Snippet>
                  : <Link page="reporting.details.filteredTasks" query={{ report: type }} label={<Snippet>{ type }</Snippet>} />
              }
            </td>
            <td className="numeric"><Number number={ tasks[type] || 0 } /></td>
          </tr>;
        })
      }
    </tbody>
  </table>;
};

export default TaskCounts;

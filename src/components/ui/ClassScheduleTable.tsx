interface Props {
  classSchedule: any;
}

export default function ClassScheduleTable({ classSchedule }: Props) {
  const daysOfWeek = Object.keys(classSchedule);

  return (
    <table className='mx-auto mt-8'>
      <thead>
        <tr className='text-2xl'>
          {daysOfWeek.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
        <tr>
          <td colSpan={daysOfWeek.length}>
            <hr className='border-b-2 border-gray-400' />
          </td>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: classSchedule.Monday.length }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {daysOfWeek.map((day, colIndex) => (
              <td key={colIndex} className='px-4 py-2'>
                {classSchedule[day][rowIndex] ? (
                  <>
                    <span className='font-bold text-red-500'>
                      {classSchedule[day][rowIndex].time}
                    </span>
                    <br />
                    <span className='font-bold'>
                      {classSchedule[day][rowIndex].class}
                    </span>
                  </>
                ) : (
                  ''
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

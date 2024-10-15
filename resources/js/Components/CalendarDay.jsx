export default function CalendarDay({ date, ...props }) {
    return (
        <td
            {...props}
            className={`border-t border-l border-gray-200 px-6 py-3 ${
                date.isToday
                    ? 'bg-indigo-50 text-indigo-700'
                    : date.isSameMonth
                    ? 'bg-white text-gray-700'
                    : 'bg-gray-50 text-gray-500'
            } ${props.className}`}
        >
            {date.day}
        </td>
    );
}
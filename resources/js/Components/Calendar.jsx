export default function Calendar({ date, ...props }) {


    

    return (
        <div className="grid grid-cols-5 gap-1">
            {date.map((week, index) => (
                <React.Fragment key={index}>
                    {week.map((day) => (
                        <CalendarDay key={day.date} date={day} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
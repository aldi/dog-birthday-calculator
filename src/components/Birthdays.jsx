const birthdayEmojis = ['🎂', '🎉', '🎈', '🎁', '🥳', '🎊', '✨'];

export default function Birthdays({ name, datesArr }) {
  return (
    <>
      <h2 className="results-title">
        Upcoming birthdays for <span>{name}</span> 🎉
      </h2>
      <div className="birthday-list">
        {datesArr.map((date, index) => (
          <div
            key={index}
            className="birthday-card animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="birthday-number">#{index + 1}</span>
            <span className="birthday-date">{date}</span>
            <span className="birthday-emoji">
              {birthdayEmojis[index % birthdayEmojis.length]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

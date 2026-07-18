type JourneyItemProps = {
  period: string;
  title: string;
  description: string;
};

function JourneyItem({ period, title, description }: JourneyItemProps) {
  return (
    <article className="journey-item">
      <span className="journey-period">{period}</span>

      <div className="journey-item-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default JourneyItem;

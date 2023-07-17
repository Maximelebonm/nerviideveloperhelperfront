export const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a href={part} key={index} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };